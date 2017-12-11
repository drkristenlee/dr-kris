// ---------------- Components Section ----------------

// 4. Define the components to be used by the Vue instance
// Each Vue component consists of the HTML tag that will be used for
// it (Vue swaps it out for it's template during rendering) and its data

// <home-feed>
Vue.component('press-media-grid', {
	template: `<div class="press_section section no-bg less-top" id=press-media-grid>

		<img src="./static/images/inkblots/IB_footer.png" class="inkblot landing-resources-inkblot bottom">

		<div class="press_grid">

			<div class="press_item" v-for="entry in results">
				<a v-bind:href="entry.linkToContent" target="_blank" class="overlay_link"></a>
				<div class="thumbnail video" :style="{ backgroundImage: 'url('+entry.thumbnailImageUrl+')' }"></div>
				<div class="content">
					<p class="title">{{ entry.title }}</p>
					<p class="pub-date">{{ entry.publication }}, {{ entry.publicationDate }}</p>
					<p class="description">{{ entry.description }}</p>
				</div>
			</div>
			
		</div>

		<button class="button black loader" @click="callAPI" :class="{ 'hidden': this.doneLoading }">load more</button>
	</div>`,
	data: function() {
		return {
			pg: 1,
			search: "", 
			sortBy: null,
			results: [],
			doneLoading: false
		}
	},
	methods: {
		callAPI: function(data) {
			var self = this;
        	Vue.nextTick(function(){
				$.ajax({
					type: "GET",
					url: "./api/press_media.json?pg="+self.pg,
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
	}
});

Vue.component('press-mentioned-grid', {
	template: `<div class="press_section section no-bg less-top" id=press-mentioned-grid>

		<img src="./static/images/inkblots/IB_meet_right.png" class="inkblot press-grid-bottom">

		<div class="press_grid">

			<div class="press_item" v-for="entry in results">
				<a v-bind:href="entry.linkToContent" target="_blank" class="overlay_link"></a>
				<div class="thumbnail" :style="{ backgroundImage: 'url('+entry.thumbnailImageUrl+')' }"></div>
				<div class="content">
					<p class="title">{{ entry.title }}</p>
					<p class="pub-date">{{ entry.publication }}, {{ entry.publicationDate }}</p>
					<p class="description">{{ entry.description }}</p>
				</div>
			</div>
			
		</div>

		<button class="button black loader" @click="callAPI" :class="{ 'hidden': this.doneLoading }">load more</button>
	</div>`,
	data: function() {
		return {
			pg: 1,
			search: "", 
			sortBy: null,
			results: [],
			doneLoading: false
		}
	},
	methods: {
		callAPI: function(data) {
			var self = this;
        	Vue.nextTick(function(){
				$.ajax({
					type: "GET",
					url: "./api/press_mentioned.json?pg="+self.pg,
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
	}
});

Vue.component('press-written-grid', {
	template: `<div class="press_section section no-bg less-top" id=press-written-grid>

		<h2 class="press-title mobile-pad">Written By Dr. Kris</h2>

		<div class="press_grid">

			<img src="./static/images/inkblots/IB_meet_right.png" class="inkblot press-grid-bottom">

			<div class="press_item" v-for="entry in results">
				<a v-bind:href="entry.linkToContent" target="_blank" class="overlay_link"></a>
				<div class="thumbnail" :style="{ backgroundImage: 'url('+entry.thumbnailImageUrl+')' }"></div>
				<div class="content">
					<p class="title">{{ entry.title }}</p>
					<p class="pub-date">{{ entry.publication }}, {{ entry.publicationDate }}</p>
					<p class="description">{{ entry.description }}</p>
				</div>
			</div>
			
		</div>

		<button class="button black loader" @click="callAPI" :class="{ 'hidden': this.doneLoading }">load more</button>
	</div>`,
	data: function() {
		return {
			pg: 1,
			search: "", 
			sortBy: null,
			results: [],
			doneLoading: false
		}
	},
	methods: {
		callAPI: function(data) {
			var self = this;
        	Vue.nextTick(function(){
				$.ajax({
					type: "GET",
					url: "./api/press_written.json?pg="+self.pg,
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
	}
});


// ---------------- Parent Vue Section ----------------

// 5. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const vm = new Vue({
    data: {}
}).$mount('#content');
