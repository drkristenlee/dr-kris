// ---------------- Components Section ----------------

// 4. Define the components to be used by the Vue instance
// Each Vue component consists of the HTML tag that will be used for
// it (Vue swaps it out for it's template during rendering) and its data

// <home-feed>
Vue.component('event-upcoming-list', {
	template: `<div id="events-upcoming">
		<div class="event_groups">
			
			<p class="no_events_placeholder main" v-if="results.length == 0">No upcoming</p>

			<template v-else>

				<div class="event_section" v-for="month in groupedEvents">
					<p class="title">{{ convertMonth(month.month) }} {{ month.year }}</p>
					
					<div class="event-list">
							
						<div class="event" v-for="entry in month.events">
							<div class="event_info">
								<div class="info-title">{{ entry.title }}</div>
								<div class="info">
									<p class="info-date">{{ printDate(entry.date) }}</p>
									<p class="info-loc">{{ entry.location }}</p>
								</div>
							</div>
							<p class="description">
								{{ entry.description }}
							</p>
						</div>

					</div>
				</div>

			</template>

		</div>

		<div class="load-container">
			<button class="button black loader" @click="callAPI" :class="{ 'hidden': this.doneLoading }">load more</button>
		</div>

	</div>`,
	data: function() {
		return {
			pg: 1,
			results: [],
			doneLoading: false
		}
	},
	methods: {
		printDate: function(dateString) {
			var d = new Date(Date.parse(dateString));
			return (d.getMonth()+1) + "/" + d.getDate() + "/" + (d.getFullYear().toString().slice(-2));
		},
		convertMonth: function(monthIndex) {
			var monthNames = ["January", "February", "March", "April", "May", "June",
			  "July", "August", "September", "October", "November", "December"
			];
			return monthNames[monthIndex];
		},
		callAPI: function(data) {
			var self = this;
        	Vue.nextTick(function(){
				$.ajax({
					type: "GET",
					url: "./api/events_upcoming.json?pg="+self.pg,
					contentType: "application/json",
					success: function(returnData) {
						self.results = self.results.concat(returnData.data);
						//console.log(returnData);
						if (returnData.meta.pagination.total_pages == self.pg) {
							self.doneLoading = true;
						}
						self.pg++;
					},
					error: function(jqXHR, textStatus, errorThrown) {
						//console.log(errorThrown);
					}
				});
			});
		},
	},
	mounted: function() {
		this.callAPI();
	},
	computed: {
		groupedEvents: function() {
			var groupedMonths = [];
			var temp = { "month": null, "year": null, "events":[] };
			for (var i = 0; i < this.results.length; i++) {
				var cD = new Date(Date.parse(this.results[i].date));

				if ( temp.month == null && temp.year == null ) {
					temp.month = cD.getMonth(); 
					temp.year = cD.getFullYear();
					temp.events.push(this.results[i]);
				} else {
					// if same month and year
					if ( cD.getMonth() == temp.month && cD.getFullYear() == temp.year ) {
						temp.events.push(this.results[i]);
					} else {
						// push current object
						groupedMonths.push(temp);
						// reset 
						temp = { "month": cD.getMonth(), "year": cD.getFullYear(), "events":[this.results[i]] };
					}
				}
			}
			// push whatever is the last month
			groupedMonths.push(temp);
			return groupedMonths;
		}
	}
});

// ---------------- Parent Vue Section ----------------

// 5. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const vm = new Vue({
    data: {}
}).$mount('#content');