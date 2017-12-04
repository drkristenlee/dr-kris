// ---------------- Components Section ----------------

// 4. Define the components to be used by the Vue instance
// Each Vue component consists of the HTML tag that will be used for
// it (Vue swaps it out for it's template during rendering) and its data

// <home-feed>
Vue.component('quiz-element', {
	template: `<div id="quiz">
		<div class="progress-indicator">
			<div class="complete progress-circle" v-for="n in step"></div>

			<div class="progress-circle" v-for="n in (3 + questions.length - step)"></div>
		</div>

		<div class="quiz-intro" v-if="step === 0">
			<p class="body">The Mentalligence Quiz gives you feedback on how to rethink thoughts and behaviors that might 
			be getting in the way of living a mindful, connected life. Mentalligence helps you build the mindsets, skills,
			and habits needed to avoid common behavioral traps that lead to shutting down, numbing out, binding up, and
			staying stuck. It helps inspire connection, proactivity, and creativity in your everyday choices to help
			you find what positive psychologists call "The Good Life", the capacity to flourish in your relationships
			at home, work, and beyond.</p>

			<p class="body">This quiz takes more than two seconds to complete, but it's worth it (it's not a drive thru option,
			but you don't have to park it here all day, either). Plan on spending no more than fifteen minutes. You will recieve
			a personalized report that gives you concrete strategies to help you become more agile, mindful, and conneted, aka 
			"Mentalligent". As you might be guessing it, the Quiz embodies the principles of my book, Mentalligence: A New
			Psychology of Thinking, available for pre-order and scheduled to debut on one of my favorite days ever, February 6th
			(my daughter's birthday, XO, darling). You can also learn more by connecting with my @TheRealDrKris.</p>

			<p class="disclaimer">By using this quiz you agree to <a href="#" class="terms-conditions">these terms and 
			conditions</a></p>

			<button class="button primary" @click="startQuiz">Begin Quiz</button>
		</div>

		<div class="quiz-rate quiz-page" v-else-if="step > 0 && step <= questions.length">
			<div class="questions-container">
				<template v-for="(q, index) in questions[step-1]">
					<div class="quiz-question-block">
						<p class="question">{{ q.question }}<span class="asterik" v-if="step === 1 && index === 0">* This question is required</span><span class="asterik" v-else>*</span>
						</p>
						<div class="response-container">
							<div class="label small left">Strongly Disagree</div>
							<div class="answer_list">
								<template v-for="n in 6">
									<div class="option" @click="q.answer=n" :class="{ selected: q.answer == n }"></div>
								</template>
							</div>
							<div class="label small right">Strongly Agree</div>
						</div>
					</div>
				</template>
			</div>

			<div class="action-container">
				<button class="button" @click="stepChange(-1)">Previous</button>
				<button class="button primary" @click="stepChange(1)">Next</button>
			</div>
		</div>

		<div class="quiz-drag quiz-page" v-else-if="step === questions.length+1">
			<div class="questions-container">
				<div class="drag-explain drag-container">
					<p v-for="para in drag_drop.paragraphs" class="explanation">{{ para }}</p>
				</div>

				<div class="drag-choices drag-container">
					<div class="option-value">
						<div class="label">1.</div>
						<button class="button dropdown content" @click="toggleActive">
							Select a value...
							<ul class="drop-menu">
								<li v-for="value in drag_drop.values">{{ value }}</li>
							</ul>
						</button>
					</div>

					<div class="option-value">
						<div class="label">2.</div>
						<button class="button dropdown content" @click="toggleActive">
							Select a value...
							<ul class="drop-menu">
								<li v-for="value in drag_drop.values">{{ value }}</li>
							</ul>
						</button>
					</div>

					<div class="option-value">
						<div class="label">3.</div>
						<button class="button dropdown content" @click="toggleActive">
							Select a value...
							<ul class="drop-menu">
								<li v-for="value in drag_drop.values">{{ value }}</li>
							</ul>
						</button>
					</div>
				</div>

				<ul class="value-list drag-container">
					<li v-for="value in drag_drop.values" class="value-item">{{ value }}</li>
				</ul>

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

		<div class="quiz-complete quiz-page" v-else-if="step === questions.length+3">
			<div class="questions-container">
				<p class="body congrats">Congratulations! You have completed the Mentalligence quiz!</p>
				<p class="body">Here's the skinny: You're on track, and with some finese, you can take it to another level. 
				Like any one of us, there's always strengths to leverage, and room for improvement. In general you want to be on the lookout for:
				<div class="sub-text">
					<p class="subbody"><strong>Leveraging your strengths.</strong> Lorem ipsum dolor sit amet, 
					consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
					commodo consequat.</p>
					<p class="subbody"><strong>Avoiding common behavioral traps.</strong> Lorem ipsum dolor sit amet, 
					consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
					commodo consequat.</p>
					<p class="subbody"><strong>Elevating your values.</strong> Lorem ipsum dolor sit amet, 
					consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
					commodo consequat.</p>
				</div>

				<div class="get_results">
					<p class="body">Lorem ipsum dolor sit amet, 
					consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
					commodo consequat.</p>
					<button class="button white">Get my results!</button>
				</div>

				<p class="body bold title">Spread Something Good</p>
				<p class="body">If you want to get to the Good Life, and help those in your reach to do the same,
				please share via your social network. I hope it will spark dynamic conversations, and that you will
				link arms with me to bring us forward in our world that seems to be taking steps backwards.
				</p>
				<p class="body">The concept of Mentalligence was born out of my clinical work, teaching, and research.
				It's left me spinning, in a good way. There's so much to learn, unlearn, and relearn. I hope it will
				help you do the same!</p>
				<p class="body">To learn more, check out my new book Mentalligence: A New Psychology of Thinking.
				<br>Learning is everything, everything is learning!</p>
				<p class="body">Take awesome care,</p>
				<img class="signature" src="./static/images/logo.gif">
				<p class="body">Dr. Kris</p>
			</div>

			<div class="action-container">
				<button class="button" @click="stepChange(-1)">Previous</button>
				<a href="./quiz"><button class="button primary">Restart</button></a>
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
			drag_drop: {
				paragraphs: [
					"Now it's time to rank your personal values. Click and drag to rank your top 3. For a description on the value, hover over the option.",
					"Personal values are what make you tick. Of all things that move you, they matter most. They define your core essence - the things that are non-negotiable asepects of your being."
				],
				values: [
					"Authenticity", "Empathy", "Agility", "Service",
					"Love of learning", "Confidence", "Sustainability", "Adventure",
					"Social conciousness", "Humility", "Presence", "Persistence",
					"Perspective", "Connectedness", "Globally curious", "Gratitude",
					"Optimism", "Autonomy", "Open-mindedness", "Boundlessness",
					"Solidarity", "Creativity"
				]
			},
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
		toggleActive: function(event){
			event.currentTarget.classList.toggle('active');
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
