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
				<button class="button primary" @click="stepChange(1)" :disabled="!questionsAnswered(step)">Next</button>
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
						<button class="button dropdown content" :class="{ 'primary': this.drag_drop.selected.first !== null }" @click="toggleActive">
							<template v-if="this.drag_drop.selected.first !== null">
								{{ this.drag_drop.selected.first }}
							</template>
							<template v-else>
								Select a value...
							</template>
							<ul class="drop-menu">
								<template v-for="value in drag_drop.values">
									<li v-if="drag_drop.selected.first !== value &&
									drag_drop.selected.second !== value &&
									drag_drop.selected.third !== value"
									@click="drag_drop.selected.first = value;">{{ value }}</li>
								</template>
							</ul>
						</button>
					</div>

					<div class="option-value">
						<div class="label">2.</div>
						<button class="button dropdown content" :class="{ 'primary': this.drag_drop.selected.second !== null }" @click="toggleActive">
							<template v-if="this.drag_drop.selected.second !== null">
								{{ this.drag_drop.selected.second }}
							</template>
							<template v-else>
								Select a value...
							</template>
							<ul class="drop-menu">
								<template v-for="value in drag_drop.values">
									<li v-if="drag_drop.selected.first !== value &&
									drag_drop.selected.second !== value &&
									drag_drop.selected.third !== value"
									@click="drag_drop.selected.second = value;">{{ value }}</li>
								</template>
							</ul>
						</button>
					</div>

					<div class="option-value">
						<div class="label">3.</div>
						<button class="button dropdown content" :class="{ 'primary': this.drag_drop.selected.third !== null }" @click="toggleActive">
							<template v-if="this.drag_drop.selected.third !== null">
								{{ this.drag_drop.selected.third }}
							</template>
							<template v-else>
								Select a value...
							</template>
							<ul class="drop-menu">
								<template v-for="value in drag_drop.values">
									<li v-if="drag_drop.selected.first !== value &&
									drag_drop.selected.second !== value &&
									drag_drop.selected.third !== value"
									@click="drag_drop.selected.third = value;">{{ value }}</li>
								</template>
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
				<button class="button primary" @click="stepChange(1)"
				:disabled="this.drag_drop.selected.first == null || 
				this.drag_drop.selected.second == null ||
				this.drag_drop.selected.third == null">Next</button>
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
				<button class="button primary" @click="stepChange(1)"
				:disabled="this.mindset_question.answer == null">Next</button>
			</div>
		</div>

		<div class="quiz-complete quiz-page" v-else-if="step === questions.length+3">
			<div class="questions-container">
				<p class="body congrats">Congratulations! You have completed the Mentalligence quiz!</p>
				<p class="body">Here's the skinny: You're on track, and with some finese, you can take it to another level. 
				Like any one of us, there's always strengths to leverage, and room for improvement. In general you want to be on the lookout for:
				<div class="sub-text">
					<p class="subbody"><strong>Leveraging your strengths.</strong> You can benefit from working
					to build up four specific lenses: reflective, mindful, global, and creative lenses, to help
					you see and do better.</p>
					<p class="subbody"><strong>Avoiding common behavioral traps.</strong> Sleepwalking, perfectionism,
					centricism and lockdown can leave us all in downward spiral trends.</p>
					<p class="subbody"><strong>Elevating your values.</strong> Most of us have waaay more than
					three values, but our top picks are ones we want to see connected to our daily behaviors.
					Research shows that living a value-based life is where's it at There's no time for anything else.</p>
				</div>

				<div class="get_results">
					<p class="body">Thanks for spending time reflecting on this. Now it's time to find out how to take
					this thinking and translate it into deeper awareness and action. I'm excited to share a free 
					MENTALLIGENCE REPORT, based on your answers. This will give you a general framework to give you an
					edge in building the kind of thinking and behavioral agility that helps us show up in full splendor
					and work for better outcomes for all.</p>
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
						question: "I often go along to get along.",
						answer: null
					},
					{
						question: "I regularly work to imagine myself in someone else's shoes.",
						answer: null
					},
					{
						question: "I spend a good portion of my time people pleasing and building my own image.",
						answer: null
					},
					{
						question: "It's relativley easy of me to stand up for myself in situations.",
						answer: null
					},
					{
						question: "I regularly reflect on my behavior and make necessary tweaks.",
						answer: null
					},
					{
						question: "I'm fairly sensitive to negative feedback.",
						answer: null
					},

					{
						question: "I can see the lessons within the setbacks I've faced.",
						answer: null
					},
					{
						question: `I spend a fair amount of time checking "facts" from multiple, credible sources.`,
						answer: null
					},
					{
						question: "Once I make up my mind, I don't look back.",
						answer: null
					},
					{
						question: "I let things build up before noticing I need to make changes.",
						answer: null
					},
					{
						question: "What other people think drives most of my behavior.",
						answer: null
					},
				],
				[
					{
						question: "I can readily name three of my strengths, and own them with confidence.",
						answer: null
					},
					{
						question: "I expect setbacks to happen, but most of the time I keep pressing on.",
						answer: null
					},
					{
						question: "I have solid people in my life that I can trust enough to open up to.",
						answer: null
					},
					{
						question: "After taking a risk and things not going well, I'm willing to try again.",
						answer: null
					},
					{
						question: "I take time to form my own opinions.",
						answer: null
					},
					{
						question: "I tend to spend my time wisely.",
						answer: null
					},
					{
						question: "It's challenging to determine between my needs and wants.",
						answer: null
					},
					{
						question: "I often feel grateful for what I have",
						answer: null
					},
					{
						question: "I like to share my resources, and tend to do so on a regular basis.",
						answer: null
					},
				],
				[
					{
						question: `I am more likely to believe the opinions of an "expert" or leader over my own.`,
						answer: null
					},
					{
						question: "I spend most of my time with people who share my similar views.",
						answer: null
					},
					{
						question: `I'm comfortable being a non-conformist when a situation calls for it.`,
						answer: null
					},
					{
						question: `I'd be able to leave behind old thinking that doesn't fit my current values.`,
						answer: null
					},
					{
						question: `I've been able to pinpoint my biases and try my best to overcome them.`,
						answer: null
					},
					{
						question: `Society would be better off if people put aside their differences.`,
						answer: null
					},
					{
						question: `I've learned a lot from people I once though didn't have much in common with me.`,
						answer: null
					},
					{
						question: `The times I've traveled outside my boundaries (group, city, state, country) have taught me valuable lessons`,
						answer: null
					},
					{
						question: `Most of my behavior falls within society's stereotypical expectations of me.`,
						answer: null
					},
					{
						question: `I have friends and associates from many different places.`,
						answer: null
					},
					{
						question: `I find myself frustrated with stereotypes and prejudices.`,
						answer: null
					},
					{
						question: `In general, I think it's best to find a common ground with those I don't see eye to eye with.`,
						answer: null
					},
					{
						question: `I am able to communicate in more than one language.`,
						answer: null
					},
				],
				[
					{
						question: `I am living a creative life, by choice.`,
						answer: null
					},
					{
						question: `I have role models who have inspired me to take the road less traveled.`,
						answer: null
					},
					{
						question: `My values are represented in my everyday behavior.`,
						answer: null
					},
					{
						question: `I am able to set boundaries so that other people's priorities don't run my life.`,
						answer: null
					},
					{
						question: `Ethics are important to me.`,
						answer: null
					},
					{
						question: `I am able to take needed breaks, rests or vacations from my demands.`,
						answer: null
					},
					{
						question: `My work (school and/or employment) consumes me more than I'd like.`,
						answer: null
					},
					{
						question: `The kind of pace I'm keeping is sustainable.`,
						answer: null
					},
					{
						question: `There's room in my life for leisure/fun.`,
						answer: null
					},
					{
						question: `I have a solid amount of confidence in my ability to learn new things.`,
						answer: null
					},
					{
						question: `I'm commited to finding new growth opportunities.`,
						answer: null
					},
				]
			],
			drag_drop: {
				paragraphs: [
					"Now it's time to rank your personal values. Select your top 3 from the dropdowns. For a description on the value, hover over the option.",
					"Personal values are what make you tick. Of all things that move you, they matter most. They define your core essence - the things that are non-negotiable asepects of your being."
				],
				values: [
					"Authenticity", "Empathy", "Agility", "Service",
					"Love of learning", "Confidence", "Sustainability", "Adventure",
					"Social conciousness", "Humility", "Presence", "Persistence",
					"Perspective", "Connectedness", "Globally curious", "Gratitude",
					"Optimism", "Autonomy", "Open-mindedness", "Boundlessness",
					"Solidarity", "Creativity"
				],
				selected: {
					first: null,
					second: null,
					third: null
				}
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
		questionsAnswered: function(qPage) {
			return true;
			for (var i=0; i < this.questions[qPage-1].length; i++) {
				if ( this.questions[qPage-1][i].answer == null ) {
					return false;
				}
			}
			return true;
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
