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

		<div class="quiz-rate quiz-page" v-else-if="step > 0 && step <= questions.length">
			<div class="questions-container">
				<template v-for="(q, index) in questions[step-1]">
					<div class="quiz-question-block">
						<p class="question">{{ q.question }}<span class="asterik" v-if="step === 1 && index === 0">* This question is required</span><span class="asterik" v-else>*</span>
						</p>
						<div class="response-container">
							<div class="label small">Strongly Disagree</div>
							<div class="answer_list">
								<template v-for="n in 6">
									<div class="option" @click="q.answer=n" :class="{ selected: q.answer == n }"></div>
								</template>
							</div>
							<div class="label small">Strongly Agree</div>
						</div>
					</div>
				</template>
			</div>

			<div class="action-container">
				<button class="button" @click="stepChange(-1)">Previous</button>
				<button class="button primary" @click="stepChange(1)">Next</button>
			</div>
		</div>

		<div class="quiz-slide quiz-page" v-else-if="step === questions.length+1">
			<div class="questions-container">
				<p>Drag and drop to-do</p>
			</div>
			<div class="action-container">
				<button class="button" @click="stepChange(-1)">Previous</button>
				<button class="button primary" @click="stepChange(1)">Next</button>
			</div>
		</div>

		<div class="quiz-slide quiz-page" v-else-if="step === questions.length+2">
			<div class="questions-container">
				<template v-for="q in slide_questions">
					<div class="quiz-question-block">
						<p class="question">{{ q.question }}<span class="asterik">*</span></p>
						<div class="response-container">
							<div class="label">Not at all true of me</div>
							<div class="slider-container">
								<input type="range" min="0" max="10" value="5" class="slider" v-model="q.answer">
							</div>
							<div class="label">Completley true of me</div>
						</div>
					</div>
				</template>
			</div>

			<div class="questions-container">
				<div class="select-wrapper">
					<p class="question">{{ mindset_question.question }}<span class="asterik">*</span></p>
					<div class="select_options">
						<template v-for="(option, index) in mindset_question.options">
							<div class="option" @click="mindset_question.answer=index" 
							:class="{ selected: mindset_question.answer == index }"> 
								<p class="text">{{ option }}</p>
							</div>
						</template>
					</div>
				</div>
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
			],
			slide_questions: [
				{
					question: "For the most part, I carry out the value of FIRST in various areas of my life",
					answer: 5
				},
				{
					question: "For the most part, I carry out the value of SECOND in various areas of my life",
					answer: 5
				},
				{
					question: "For the most part, I carry out the value of THIRD in various areas of my life",
					answer: 5
				}
			],
			mindset_question: {
				question: "Choose the statement that best describes how you think",
				options: [
					"I stay stuck in my viewpoints",
					"I change like the wind",
					"I adjust my mindset and behaviors based on careful thinking"
				],
				answer: null
			}
		}
	},
	methods: {
		startQuiz: function() {
			this.step = 1;
			Vue.nextTick(function(){
				window.scroll(0, 0);
			});
		},
		stepChange: function(diff) {
			this.step += diff;
			Vue.nextTick(function(){
				window.scroll(0, 0);
			});
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
