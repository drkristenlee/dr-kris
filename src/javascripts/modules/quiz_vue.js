// ---------------- Components Section ----------------

// 4. Define the components to be used by the Vue instance
// Each Vue component consists of the HTML tag that will be used for
// it (Vue swaps it out for it's template during rendering) and its data

// <home-feed>
Vue.component('quiz-element', {
	template: `<div id="quiz">
		<div class="quiz-intro" v-if="step === 0">
			<p class="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
			dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
			ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
			dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
			officia deserunt mollit anim id est laborum.</p>

			<p class="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
			dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
			ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
			dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
			officia deserunt mollit anim id est laborum.</p>

			<button class="button primary" @click="startQuiz">Begin Quiz</button>
		</div>

		<div class="quiz-rate" v-else-if="step > 0 && step < rate_pages">
			<div class="questions-container">
				<template v-for="q in questions[step-1]">
					<div class="quiz-question-block">
						<p class="question">{{ q.question }}</p>
						<div class="answer_list">
							<template v-for="n in 6">
								<div class="option" @click="q.answer=n" :class="{ selected: q.answer == n }"></div>
							</template>
						</div>
					</div>
				</template>
			</div>

			<div class="action-container">
				<button class="button" @click="stepChange(-1)">Previous</button>
				<button class="button primary" @click="stepChange(1)">Next</button>
			</div>
		</div>
	</div>`,
	data: function() {
		return {
			step: 0,
			rate_pages: 5,
			questions: [
				[
					{
						question: "I am comfortable with people getting to know the real me.",
						answer: null
					},
					{
						question: "I am comfortable with people getting to know the real me.",
						answer: null
					},
					{
						question: "I am comfortable with people getting to know the real me.",
						answer: null
					},
					{
						question: "I am comfortable with people getting to know the real me.",
						answer: null
					},
					{
						question: "I am comfortable with people getting to know the real me.",
						answer: null
					},
					{
						question: "I am comfortable with people getting to know the real me.",
						answer: null
					},
					{
						question: "I am comfortable with people getting to know the real me.",
						answer: null
					},
				],
				[
					{
						question: "I am comfortable with people getting to know the real me.",
						answer: null
					},
					{
						question: "I am comfortable with people getting to know the real me.",
						answer: null
					},
					{
						question: "I am comfortable with people getting to know the real me.",
						answer: null
					},
					{
						question: "I am comfortable with people getting to know the real me.",
						answer: null
					},
					{
						question: "I am comfortable with people getting to know the real me.",
						answer: null
					},
					{
						question: "I am comfortable with people getting to know the real me.",
						answer: null
					},
				]
			]
		}
	},
	methods: {
		startQuiz: function() {
			this.step = 1;
		},
		stepChange: function(diff) {
			this.step += diff;
			window.scroll(0, 70);
		},
		submitQuiz: function() {
			
		}
	},
	computed: {
    },
});


// ---------------- Parent Vue Section ----------------

// 5. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const vm = new Vue({
    data: {}
}).$mount('#content');
