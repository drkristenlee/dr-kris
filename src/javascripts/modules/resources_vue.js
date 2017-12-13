// ---------------- Components Section ----------------

// 4. Define the components to be used by the Vue instance
// Each Vue component consists of the HTML tag that will be used for
// it (Vue swaps it out for it's template during rendering) and its data

// <home-feed>
Vue.component('resources-grid', {
	template: `<div id="resources">
			<div class="filter">
				<input class="input" type="text" placeholder="Search for resources by title or file extension" v-model="search">
				<button class="button dropdown sorter" :class="{ 'primary': this.filterBy !== null }">
					<template v-if="this.filterBy !== null">
						{{ this.filterByName }}
					</template>
					<template v-else>
						Sort by
					</template>
					<ul class="drop-menu" @click="toggleActive">
						<a class="buy-link" @click="filterBy = 'date_asc';"><li>Date Asc.</li></a>
						<a class="buy-link" @click="filterBy = 'date_desc';"><li>Date Desc.</li></a>
						<a class="buy-link" @click="filterBy = 'title_asc';"><li>Title A→Z</li></a>
						<a class="buy-link" @click="filterBy = 'title_desc';"><li>Title Z→A</li></a>
					</ul>
				</button>
			</div>

			<div class="content">

				<template v-for="entry in sortedResults">
					<div class="resource_item" v-if="isFiltered(entry)">
						<a v-bind:href="'./uploads/resources/'+ entry.filePath" download class="overlay_link"></a>
						<div class="thumbnail" :class="'rot'+(entry.randInt * 90)">
							<img class="img-ink" :src="'./static/images/inkblots/resource_ink/Resources_Icon' + entry.randInt + '.png'" >
						</div>
						<div class="info">
							<p class="resource_title">{{ entry.title }}</p>
							<p class="meta"><span class="file_type">.{{ entry.fileType.toUpperCase() }}</span> <span class="date">{{ parseDate(entry.date) }}</span></p>
							<p class="more"><a class="link teal">download <span class="anim-arrow">→</span></a></p>
						</div>
					</div>
				</template>
				
			</div>

			<div class="action-container">
				<button class="button black loader" @click="callAPI" :class="{ 'hidden': this.doneLoading }">load more</button>
			</div>
		</div>		`,
	data: function() {
		return {
			pg: 1,
			search: "", 
			sortBy: null,
			results: [],
			doneLoading: false,
			filterBy: null
		}
	},
	methods: {
		callAPI: function(data) {
			var self = this;
        	Vue.nextTick(function(){
				$.ajax({
					type: "GET",
					url: "./api/resources.json?pg="+self.pg,
					contentType: "application/json",
					success: function(returnData) {
						for (var i=0; i<returnData.data.length; i++) {
							returnData.data[i].randInt = self.getRandomNumber(1,4);
						}
						self.results = self.results.concat(returnData.data);
						if (returnData.meta.pagination.total_pages == self.pg) {
							self.doneLoading = true;
						}
						self.pg++;
					},
					error: function(jqXHR, textStatus, errorThrown) {
						console.log(errorThrown);
					}
				});
			});
		},
		getRandomNumber: function(min, max) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
		},
		parseDate: function(datestring) {
			var d = new Date(Date.parse(datestring));
			return (d.getMonth()+1) + "/" + d.getDate() + "/" + (d.getFullYear().toString().slice(-2));
		},
		isFiltered: function(entry) {
			return entry.title.toLowerCase().includes(this.search.toLowerCase()) || 
			entry.fileType.toLowerCase() == this.search.toLowerCase();
		},
		toggleActive: function(event){
			event.currentTarget.parentElement.classList.toggle('active');
		},
	},
	mounted: function() {
		this.callAPI();
	},
	computed: {
		filterByName: function() {
			switch(this.filterBy) {
				case 'date_asc':
					return "Date Asc.";
				case 'date_desc':
					return "Date Desc.";
				case 'title_asc':
					return "Title A-Z.";
				case 'title_desc':
					return "Title Z-A.";
			}
		},
		sortedResults: function() {
			switch(this.filterBy) {
				case 'date_asc':
					return this.results.sort(function(a, b) {
					    var dA = new Date(Date.parse(a.date));
					    var dB = new Date(Date.parse(b.date));
					    return dA - dB;
					});
				case 'date_desc':
					return this.results.sort(function(a, b) {
					    var dA = new Date(Date.parse(a.date));
					    var dB = new Date(Date.parse(b.date));
					    return dB - dA;
					});
				case 'title_asc':
					return this.results.sort(function(a, b) {
					    if(a.title < b.title) return -1;
					    else if(a.title > b.title) return 1;
					    else return 0;
					});
				case 'title_desc':
					return this.results.sort(function(a, b) {
					    if(a.title > b.title) return -1;
					    else if(a.title < b.title) return 1;
					    else return 0;
					});
				default:
					return this.results;
			}
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
