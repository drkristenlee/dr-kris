// ---------------- Components Section ----------------

// 4. Define the components to be used by the Vue instance
// Each Vue component consists of the HTML tag that will be used for
// it (Vue swaps it out for it's template during rendering) and its data

// <home-feed>
Vue.component('quiz-element', {
	template: `<div id="quiz" :class="{ 'completed': step >= questions.length+3 }">
		<h3 class="section-title" v-if="step < questions.length+3">Test your Mentalligence</h3>

		<div class="progress-indicator" v-if="step < questions.length+3">
			<div class="complete progress-circle" v-for="n in step"></div>

			<div class="progress-circle" v-for="n in (2 + questions.length - step)"></div>
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

			<p class="disclaimer">By using this quiz you agree to <a :href="this.termsConditions" target="_blank" class="terms-conditions">these terms and 
			conditions</a></p>

			<p class="label">Enter your name to begin:</p>
			<div class="button-group">
				<input class="input" v-model="name" type="text" placeholder="Your name...">
				<button class="button primary" @click="startQuiz" :disabled="this.name == ''">Begin Quiz</button>
			</div>
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
				<button class="button primary" @click="submitQuiz"
				:disabled="this.mindset_question.answer == null">Complete</button>
			</div>
		</div>

		<div class="quiz-complete quiz-page" v-else-if="step === questions.length+3">
			<div class="questions-container">
				<p class="body congrats">Here are your results, {{ this.name }}!</p>
				<p class="body">Thanks for spending time reflecting on this. You are already on your way to rethinking
				your way to the Good Life - one charecterized by conciousness, connectedness, and creativity.</p> 
				<p class="body">Now it's time to find out how to take this thinking and translate it into deeper awareness
				and action. I'm excited to share this free MENTALLIGENCE REPORT, based on your answers. This will give you a 
				general framework to give you an edge in building the kind of thinking and behavioral agility that helps us 
				show up in full splendor and work for better outcomes for all.</p> 

				<div class="get_results">
					<p class="body bold title">The Low Down on Your Mentalligence</p>
					<p class="body">
						Your responses suggest that you're ready to take the next step in your growth. You're on track, 
						and with some finese, you can take it to another level. Like any one of us, there's always 
						strengths to leverage, and room for improvement. In general you want to be on the lookout for:
					</p>
					<p class="body"><strong>Leveraging your strengths.</strong> You can benefit from working
					to build up four specific lenses: reflective, mindful, global, and creative lenses, to help
					you see and do better. You seem to do well in being {{ this.highestArea() }}, and should focus in on 
					continuing to cultivate these aspects of yourself that seem to be strong suits for you.</p>

					<p class="body"><strong>Avoiding common behavioral traps.</strong> Sleepwalking, perfectionism,
					centricism and lockdown can leave us all in downward spiral trends. Your results suggest you could 
					benefit from additional skill development in being {{ this.lowestAreas() }} to help you spiral upwards.
					Remember that everything is learning, and that you are at point in your development, and research 
					shows that by identifying areas of growth, we’re more likely to make progress.</p>
					
					<p class="body"><strong>Elevating your values.</strong> Most of us have waaay more than
					three values, but our top picks are ones we want to see connected to our daily behaviors.
					As a person who prioritizes {{ this.drag_drop.selected.first }}, 
					 {{ this.drag_drop.selected.second }} and {{ this.drag_drop.selected.third }}, it’s essential to 
					uncover more ways to bring them and keep them in the fore.
					Research shows that living a value-based life is where's it at There's no time for anything else.</p>
				</div>

				<div class="breakdown-section">
					<p class="breakdown-title title">Waking Up</p>
					<p class="body">A reflective lens helps us to avoid sleepwalking through life. Instead, we stay
					agile, connected, meta-aware, drawing upon evidence-based thinking to heal and avoid the 
					trappings of unconscious behavior.</p>
					<template v-if="this.results.reflect > this.scoring_key.reflect[0]">
						<p class="body">In general, your results show: <span class="result-label">Advanced Skills</span></p>

						<div class="skill-bar advanced"></div>

						<p class="body">Your responses suggest that you are in the upper range of reflective skills and 
						behaviors. You are already striving towards and demonstrating strengths in refining behavior 
						based on careful analysis and awareness. While there is always room for growth, this is an
						area you have a solid handle on.</p>
					</template> 
					<template v-else-if="this.results.reflect > this.scoring_key.reflect[1]">
						<p class="body">In general, your results show: <span class="result-label">Intermediate Skills</span></p>

						<div class="skill-bar intermediate"></div>

						<p class="body">Your responses suggest that you are demonstrating significant strengths in meta-awareness. As human beings, further progress is always possible. With your strong command for these skills, you are likely to continue to grow and improve towards advanced skill levels.</p>
					</template> 
					<template v-else-if="this.results.reflect > this.scoring_key.reflect[2]">
						<p class="body">In general, your results show: <span class="result-label">Foundational Skills</span></p>

						<div class="skill-bar foundational"></div>

						<p class="body">Your responses suggest that you may be prone to trappings of unconscious behavior, and would benefit from concentrating on ways to build agility through evidence-based practices. You are not starting from scratch—so take time to pinpoint things you might need to unlearn, and work to pivot towards waking up and staking woke.</p>
					</template> 
					<template v-else>
						<p class="body">In general, your results show: <span class="result-label">Lagging Skills</span></p>

						<div class="skill-bar lagging"></div>

						<p class="body">There’s opportunity to awaken your mind to drive behavioral change. Beware of unconscious behavior that can lead to downward spiral trappings such as the tendency to avoid and cover up. Every human being has areas that they need work on. Select 1-2 areas you want to focus on to avoid missing the opportunity to become more aware and conscious in your behavior.</p>
					</template> 
				</div>




				<div class="breakdown-section">
					<p class="breakdown-title title">Tuning In</p>
					<p class="body">A mindful lens helps us steer clear of mindless, frenetic behavior. When we tune in, we are more likely to cultivate momentum through strengths-based, resilient and gratitude-oriented thinking that maintains the right blend of skepticism and optimism to navigate our noisy world.</p>

					<template v-if="this.results.reflect > this.scoring_key.mindful[0]">
						<p class="body">In general, your results show: <span class="result-label">Advanced Skills</span></p>

						<div class="skill-bar advanced"></div>

						<p class="body">Your responses suggest that you are in the upper range of mindfulness skills and behaviors. You are already striving towards and demonstrating strengths in maintaining a healthy balance of skeptic and optimist, and prioritizing presence in your life. While there is always room for growth, this is an area you have a solid handle on. </p>
					</template> 
					<template v-else-if="this.results.reflect > this.scoring_key.mindful[1]">
						<p class="body">In general, your results show: <span class="result-label">Intermediate Skills</span></p>

						<div class="skill-bar intermediate"></div>

						<p class="body">Your responses suggest that you are demonstrating significant strengths in mindful living. As human beings, further progress is always possible. With your strong command for these skills, you are likely to continue to grow and improve towards advanced skill levels.</p>
					</template> 
					<template v-else-if="this.results.reflect > this.scoring_key.mindful[2]">
						<p class="body">In general, your results show: <span class="result-label">Foundational Skills</span></p>

						<div class="skill-bar foundational"></div>

						<p class="body">Your responses suggest that you may be prone to trappings of mindless behavior, and would benefit from concentrating on ways to build resilience through intentional practices. You are not starting from scratch—so take time to pinpoint things you might need to unlearn, and work to pivot towards tuning in and staying focused on what matters most.</p>
					</template> 
					<template v-else>
						<p class="body">In general, your results show: <span class="result-label">Lagging Skills</span></p>

						<div class="skill-bar lagging"></div>

						<p class="body">There’s opportunity to redirect your mind to drive behavioral change. Beware of mindless behavior that can lead to downward spiral trappings such as deficit thinking. Every human being has areas that they need work on. Select 1-2 areas you want to focus on to avoid missing the opportunity to become more tuned in and mindful in your behavior.</p>
					</template> 
				</div>




				<div class="breakdown-section">
					<p class="breakdown-title title">Breaking Out</p>
					<p class="body">A global lens helps us break out of insularity, groupthink, and binary ways of engaging with the world. It helps us move from bias to solidarity. When we break out, we learn to find common ground instead of succumbing to the polarization bearing down on us all.</p>

					<template v-if="this.results.reflect > this.scoring_key.global[0]">
						<p class="body">In general, your results show: <span class="result-label">Advanced Skills</span></p>

						<div class="skill-bar advanced"></div>

						<p class="body">Your responses suggest that you are in the upper range of global skills and behaviors. You are already striving towards and demonstrating strengths in transcending boundaries, and embodying a global citizen. While there is always room for growth, this is an area you have a solid handle on. </p>
					</template> 
					<template v-else-if="this.results.reflect > this.scoring_key.global[1]">
						<p class="body">In general, your results show: <span class="result-label">Intermediate Skills</span></p>

						<div class="skill-bar intermediate"></div>

						<p class="body">Your responses suggest that you are demonstrating significant strengths in universal living. As human beings, further progress is always possible. With your strong command for these skills, you are likely to continue to grow and improve towards advanced skill levels.</p>
					</template> 
					<template v-else-if="this.results.reflect > this.scoring_key.global[2]">
						<p class="body">In general, your results show: <span class="result-label">Foundational Skills</span></p>

						<div class="skill-bar foundational"></div>

						<p class="body">Your responses suggest that you may be prone to trappings of insular, centric behavior, and would benefit from concentrating on ways to build solidarity and community through intentional practices. You are not starting from scratch—so take time to pinpoint things you might need to unlearn, and work to pivot towards breaking out and staying focused on finding common ground.</p>
					</template> 
					<template v-else>
						<p class="body">In general, your results show: <span class="result-label">Lagging Skills</span></p>

						<div class="skill-bar lagging"></div>

						<p class="body">There’s opportunity to redirect your mind to drive behavioral change. Beware of centric behavior that can lead to downward spiral trappings such as polarized thinking. Every human being has areas that they need work on. Select 1-2 areas you want to focus on to avoid missing the opportunity to become more agile and global in your behavior.</p>
					</template> 
				</div>




				<div class="breakdown-section">
					<p class="breakdown-title title">Going Beyond</p>
					<p class="body">An Imagineering lens helps us wriggle free from stagnation that sucks the lifeblood out. When we go beyond, we fuse our thinking to give us the momentum to sustain ourselves, ensure inclusivity and integrate endless ways of being and thriving into our lives.</p>

					<template v-if="this.results.reflect > this.scoring_key.imagineering[0]">
						<p class="body">In general, your results show: <span class="result-label">Advanced Skills</span></p>

						<div class="skill-bar advanced"></div>

						<p class="body">Your responses suggest that you are in the upper range of Imagineering skills and behaviors. You are already striving towards and demonstrating strengths in creative living, and integrating your many sides. While there is always room for growth, this is an area you have a solid handle on.</p>
					</template> 
					<template v-else-if="this.results.reflect > this.scoring_key.imagineering[1]">
						<p class="body">In general, your results show: <span class="result-label">Intermediate Skills</span></p>

						<div class="skill-bar intermediate"></div>

						<p class="body">Your responses suggest that you are demonstrating significant strengths in adopting a life model that brings out the best in you and those you impact. As human beings, further progress is always possible. With your strong command for these skills, you are likely to continue to grow and improve towards advanced skill levels.</p>
					</template> 
					<template v-else-if="this.results.reflect > this.scoring_key.imagineering[2]">
						<p class="body">In general, your results show: <span class="result-label">Foundational Skills</span></p>

						<div class="skill-bar foundational"></div>

						<p class="body">Your responses suggest that you may be prone to trappings of disintegrated, stagnant behavior, and would benefit from concentrating on ways to fuse perspectives so you are not stuck within an unhelpful matrix. You are not starting from scratch—so take time to pinpoint things you might need to unlearn, and work to pivot towards going beyond and staying focused on sustaining a fused, inclusive and integrated way of being.</p>
					</template> 
					<template v-else>
						<p class="body">In general, your results show: <span class="result-label">Lagging Skills</span></p>

						<div class="skill-bar lagging"></div>

						<p class="body">There’s opportunity to redirect your mind to drive behavioral change. Beware of stagnant behavior that can lead to downward spiral trappings like all-or-nothing thinking. Every human being has areas that they need work on. Select 1-2 areas you want to focus on to avoid missing the opportunity to sustain a model of living that helps you thrive.</p>
					</template> 
				</div>


				<div class="breakdown-section">
					<p class="breakdown-title title">Your Top Values</p>

					<p class="body">As you continue your journey upward, remember to keep your values in the forefront
					of your conciousness. These are your top three to help you see the way your behavior lines up with
					what you care about the most:</p>

					<div class="top-values-breakdown">
						<div class="value">{{ this.drag_drop.selected.first }}</div>
						<div class="value">{{ this.drag_drop.selected.second }}</div>
						<div class="value">{{ this.drag_drop.selected.third }}</div>
					</div>

					<p class="body">In addition to your top three values, here's a listing of all the values embedded
					within the mentalligence model. Besides the three you have identified as central to you, 
					think about the ones that you want to continue to develop further:</p>

					<div class="full-list-values" :class="{ visible: this.fullValuesExpanded }">
						<p class="value-name">Authenticity</p>
						<p class="value-info">You strive to be the “real deal”, and walk your talk. 
						You can’t stand fake, or pretentiousness.</p>

						<p class="value-name">Agility</p>
						<p class="value-info">You “go with the flow”, and try not to sweat the small stuff. 
						You strive to be adaptable, not rigid</p>

						<p class="value-name">Service</p>
						<p class="value-info">You value the “greater good” over personal success; 
						you want to make a difference.</p>

						<p class="value-name">Empathy</p>
						<p class="value-info">You can imagine the perspective(s) of others, 
						and demonstrate compassion and regard for their wellbeing.</p>

						<p class="value-name">Love for learning</p>
						<p class="value-info">You are insatiably curious and can’t go without learning something 
						new and using your noodle constantly</p>

						<p class="value-name">Confidence</p>
						<p class="value-info">Standing strong is your mantra; you love to be able to trust that what 
						you see is what you get</p>

						<p class="value-name">Sustainability</p>
						<p class="value-info">You function within the bounds of your personal thresholds, 
						working to prevent overstimulation</p>

						<p class="value-name">Adventure</p>
						<p class="value-info">Always on the hunt for new and fun, you love novelty and variety, 
						you get itchy and a bad taste in your mouth when you’re bored</p>

						<p class="value-name">Precision</p>
						<p class="value-info">You are a healthy skeptic, who’s middle name is “questioner”—you want evidence 
						before you make up your mind; critical thinking is your lifeblood</p>

						<p class="value-name">Social consciousness</p>
						<p class="value-info">You’re on a mission to reduce disparities and make the world a better place</p>

						<p class="value-name">Humility</p>
						<p class="value-info">You’re the first to admit you don’t know everything, and realize there’s 
						always a new lens to look at things</p>

						<p class="value-name">Presence</p>
						<p class="value-info">Frenetic energy drives you a bit crazy; you crave being in the moment, and strive to be settled and accepting even in the midst of chaos</p>

						<p class="value-name">Persistence</p>
						<p class="value-info">You keep plugging away, even in the face of challenges; “quit” isn’t part 
						of your vocabulary</p>

						<p class="value-name">Perspective</p>
						<p class="value-info">You recognize how strongly privilege and marginalization influence the human condition, 
						you look for intersections in people’s experiences</p>

						<p class="value-name">Connectedness</p>
						<p class="value-info">You are a relationship driven person; and avoid isolation at all costs</p>

						<p class="value-name">Globally curious</p>
						<p class="value-info">Diversity is waaay more than being politically correct. You think the idea of “tolerating” it is just weird; you 
						live and breathe being in touch with diverse people and perspectives</p>

						<p class="value-name">Gratitude</p>
						<p class="value-info">You count your blessings and are pretty darn content with all you’ve got; you avoid griping over “first world pains”, like not having enough dip for the chips</p>

						<p class="value-name">Optimism</p>
						<p class="value-info">You stay on the hunt for silver linings and new possibilities; hope keeps you going. Your inner dialogue could often be mistaken for material for a motivational speech</p>

						<p class="value-name">Autonomy</p>
						<p class="value-info">You are a pioneer who hates groupthink. You like to pave your own path, Robert Frost style, or something like that</p>

						<p class="value-name">Open-minded</p>
						<p class="value-info">Once you make a decision, you are willing to change it; you are never 100% glued to any one idea or way of being.</p>

						<p class="value-name">Boundlessness</p>
						<p class="value-info">You can communicate across boundaries and relate well with almost anyone; you manage to plow those typical obstacles down, and find seemingly unlikely connections</p>

						<p class="value-name">Solidarity</p>
						<p class="value-info">You stand strong with anyone who is underserved and marginalized. You believe that human suffering is everyone’s problem. You don’t sit back and watch silently; you see activism as a vital part of your fabric.</p>

						<p class="value-name">Creativity</p>
						<p class="value-info">You are the ultimate designer—that person with endless ideas and interesting approaches. Your life is your art, and you express it in varied ways with full gusto</p>

						<p class="value-name">Spirituality</p>
						<p class="value-info">Your connection to a divine source of light and guidance guides you. Your faith in a power beyond yourself provides a compass and nurtures your soul</p>
					</div>

					<div class="btn-container">
						<button class="button black" @click="fullValuesExpanded = !fullValuesExpanded">
							<template v-if="this.fullValuesExpanded">
								show less
							</template>
							<template v-else>
								view all
							</template>
						</button>
					</div>

				</div>


				<p class="body">Awesome work, {{ this.name }}!</p>

				<p class="body">Taking this quiz has been a step towards powerful behavioral change and personal growth
				to bring impact. <span class="print-link" @click=printScreen>Click to print your results</span>.</p>

				<p class="body">I hope this will help in your quest to become more agile, mindful, and connected.</p>
				<p class="body">If you're already itching to take it to the next level, you can purchase my book <a class="link teal" href="./books">here</a>.</p>

				<p class="body">Please link arms with me @TheRealDrKris on Instagram, Twitter, Facebook, and LinkedIn
				to keep rethinking your way to the Good Life. You can also check out my resources section of my website
				for some downloads to spur on positive behavioral change and agility!</p>

				<p class="body">Take awesome care, {{ this.name}}!</p>
				<img class="signature" src="./static/images/logo.gif">
			</div>

		</div>

		<div class="quiz-results quiz-page" v-else-if="step === questions.length+4">
			<p class="body congrats">Your Results!</p>
			<p class="body">Reflect: {{ this.results.reflect }}</p>
			<p class="body">Mindful: {{ this.results.mindful }}</p>
			<p class="body">Global: {{ this.results.global }}</p>
			<p class="body">Imagineering: {{ this.results.imagineering }}</p>
		</div>

	</div>`,
	data: function() {
		return {
			termsConditions: "",
			fullValuesExpanded: false,
			step: 0,
			questions: [
				[
					{
						question: "I am comfortable with people getting to know the real me.",
						answer: null,
						score: {
							reflect: [0, 1, 2, 3, 4, 5],
							mindful: [0, 0.8, 1.6, 2.4, 3.2, 4],
							global: [0, 0.4, 0.8, 1.2, 1.6, 2],
							imagineering: [0, 0, 0, 0, 0, 0],
						}
					},
					{
						question: "I often go along to get along.",
						answer: null,
						score: {
							reflect: [5, 4, 3, 2, 1, 0],
							mindful: [0, 0, 0, 0, 0, 0],
							global: [4, 3.2, 2.4, 1.6, 0.8, 0],
							imagineering: [3, 2.4, 1.8, 1.2, 0.6, 0],
						}
					},
					{
						question: "I regularly work to imagine myself in someone else's shoes.",
						answer: null,
						score: {
							reflect: [0, 1, 2, 3, 4, 5],
							mindful: [0, 0, 0, 0, 0, 0],
							global: [0, 0.6, 1.2, 1.8, 2.4, 3],
							imagineering: [0, 0, 0, 0, 0, 0],
						}
					},
					{
						question: "I spend a good portion of my time people pleasing and building my own image.",
						answer: null,
						score: {
							reflect: [5, 4, 3, 2, 1, 0],
							mindful: [4, 3.2, 2.4, 1.6, 0.8, 0],
							global: [0, 0, 0, 0, 0, 0],
							imagineering: [3, 2.4, 1.8, 1.2, 0.6, 0],
						}
					},
					{
						question: "It's relativley easy of me to stand up for myself in situations.",
						answer: null,
						score: {
							reflect: [0, 1, 2, 3, 4, 5],
							mindful: [0, 0.6, 1.2, 1.8, 2.4, 3],
							global: [0, 0.8, 1.6, 2.4, 3.2, 4],
							imagineering: [0, 0, 0, 0, 0, 0],
						}
					},
					{
						question: "I regularly reflect on my behavior and make necessary tweaks.",
						answer: null,
						score: {
							reflect: [0, 1, 2, 3, 4, 5],
							mindful: [0, 0.8, 1.6, 2.4, 3.2, 4],
							global: [0, 0, 0, 0, 0, 0],
							imagineering: [0, 0.4, 0.8, 1.2, 1.6, 2],
						}
					},
					{
						question: "I'm fairly sensitive to negative feedback.",
						answer: null,
						score: {
							reflect: [5, 4, 3, 2, 1, 0],
							mindful: [4, 3.2, 2.4, 1.6, 0.8, 0],
							global: [2, 1.6, 1.2, 0.8, 0.4, 0],
							imagineering: [0, 0, 0, 0, 0, 0],
						}
					},

					{
						question: "I can see the lessons within the setbacks I've faced.",
						answer: null,
						score: {
							reflect: [0, 1, 2, 3, 4, 5],
							mindful: [0, 0.8, 1.6, 2.4, 3.2, 4],
							global: [0, 0, 0, 0, 0, 0],
							imagineering: [0, 0.4, 0.8, 1.2, 1.6, 2],
						}
					},
					{
						question: `I spend a fair amount of time checking "facts" from multiple, credible sources.`,
						answer: null,
						score: {
							reflect: [0, 1, 2, 3, 4, 5],
							mindful: [0, 0.8, 1.6, 2.4, 3.2, 4],
							global: [0, 0.4, 0.8, 1.2, 1.6, 2],
							imagineering: [0, 0, 0, 0, 0, 0],
						}
					},
					{
						question: "Once I make up my mind, I don't look back.",
						answer: null,
						score: {
							reflect: [5, 4, 3, 2, 1, 0],
							mindful: [4, 3.2, 2.4, 1.6, 0.8, 0],
							global: [0, 0, 0, 0, 0, 0],
							imagineering: [2, 1.6, 1.2, 0.8, 0.4, 0],
						}
					},
					{
						question: "I let things build up before noticing I need to make changes.",
						answer: null,
						score: {
							reflect: [5, 4, 3, 2, 1, 0],
							mindful: [4, 3.2, 2.4, 1.6, 0.8, 0],
							global: [2.0, 1.6, 1.2, 0.8, 0.4, 0],
							imagineering: [2.0, 1.6, 1.2, 0.8, 0.4, 0],
						}
					},
					{
						question: "What other people think drives most of my behavior.",
						answer: null,
						score: {
							reflect: [5, 4, 3, 2, 1, 0],
							mindful: [4, 3.2, 2.4, 1.6, 0.8, 0],
							global: [3, 2.4, 1.8, 1.2, 0.6, 0],
							imagineering: [3, 2.4, 1.8, 1.2, 0.6, 0],
						}
					},
				],
				[
					{
						question: "I can readily name three of my strengths, and own them with confidence.",
						answer: null,
						score: {
							reflect: [0, 0.4, 0.8, 1.2, 1.6, 2],
							mindful: [0, 1, 2, 3, 4, 5],
							global: [0, 0, 0, 0, 0, 0],
							imagineering: [0, 0.8, 1.6, 2.4, 3.2, 4],
						}
					},
					{
						question: "I expect setbacks to happen, but most of the time I keep pressing on.",
						answer: null,
						score: {
							reflect: [0, 0.8, 1.6, 2.4, 3.2, 4],
							mindful: [0, 1, 2, 3, 4, 5],
							global: [0, 0, 0, 0, 0, 0],
							imagineering: [0, 0, 0, 0, 0, 0],
						}
					},
					{
						question: "I have solid people in my life that I can trust enough to open up to.",
						answer: null,
						score: {
							reflect: [0, 0.4, 0.8, 1.2, 1.6, 2],
							mindful: [0, 1, 2, 3, 4, 5],
							global: [0, 0, 0, 0, 0, 0],
							imagineering: [0, 0.8, 1.6, 2.4, 3.2, 4],
						}
					},
					{
						question: "After taking a risk and things not going well, I'm willing to try again.",
						answer: null,
						score: {
							reflect: [0, 0.8, 1.6, 2.4, 3.2, 4],
							mindful: [0, 1, 2, 3, 4, 5],
							global: [0, 0, 0, 0, 0, 0],
							imagineering: [0, 0, 0, 0, 0, 0],
						}
					},
					{
						question: "I take time to form my own opinions.",
						answer: null,
						score: {
							reflect: [0, 0.8, 1.6, 2.4, 3.2, 4],
							mindful: [0, 1, 2, 3, 4, 5],
							global: [0, 0.6, 1.2, 1.8, 2.4, 3],
							imagineering: [0, 0, 0, 0, 0, 0],
						}
					},
					{
						question: "I tend to spend my time wisely.",
						answer: null,
						score: {
							reflect: [0, 0.8, 1.6, 2.4, 3.2, 4],
							mindful: [0, 1, 2, 3, 4, 5],
							global: [0, 0, 0, 0, 0, 0],
							imagineering: [0, 0, 0, 0, 0, 0],
						}
					},
					{
						question: "It's challenging to determine between my needs and wants.",
						answer: null,
						score: {
							reflect: [0, 0.8, 1.6, 2.4, 3.2, 4],
							mindful: [0, 1, 2, 3, 4, 5],
							global: [0, 0, 0, 0, 0, 0],
							imagineering: [0, 0, 0, 0, 0, 0],
						}
					},
					{
						question: "I often feel grateful for what I have",
						answer: null,
						score: {
							reflect: [0, 0.8, 1.6, 2.4, 3.2, 4],
							mindful: [0, 1, 2, 3, 4, 5],
							global: [0, 0, 0, 0, 0, 0],
							imagineering: [0, 0, 0, 0, 0, 0],
						}
					},
					{
						question: "I like to share my resources, and tend to do so on a regular basis.",
						answer: null,
						score: {
							reflect: [0, 0.8, 1.6, 2.4, 3.2, 4],
							mindful: [0, 1, 2, 3, 4, 5],
							global: [0, 0.4, 0.8, 1.2, 1.6, 2],
							imagineering: [0, 0, 0, 0, 0, 0],
						}
					},
				],
				[
					{
						question: `I am more likely to believe the opinions of an "expert" or leader over my own.`,
						answer: null,
						score: {
							reflect: [2, 1.6, 1.2, .8, 0.4, 0],
							mindful: [4, 3.2, 2.4, 1.6, 0.8, 0],
							global: [5, 4, 3, 2, 1, 0],
							imagineering: [0, 0, 0, 0, 0, 0],
						}
					},
					{
						question: "I spend most of my time with people who share my similar views.",
						answer: null,
						score: {
							reflect: [2, 1.6, 1.2, .8, 0.4, 0],
							mindful: [4, 3.2, 2.4, 1.6, 0.8, 0],
							global: [5, 4, 3, 2, 1, 0],
							imagineering: [0, 0, 0, 0, 0, 0],
						}
					},
					{
						question: `I'm comfortable being a non-conformist when a situation calls for it.`,
						answer: null,
						score: {
							reflect: [0, 0.4, 0.8, 1.2, 1.6, 2],
							mindful: [0, 0, 0, 0, 0, 0],
							global: [0, 1, 2, 3, 4, 5],
							imagineering: [0, 0.8, 1.6, 2.4, 3.2, 4],
						}
					},
					{
						question: `I'd be able to leave behind old thinking that doesn't fit my current values.`,
						answer: null,
						score: {
							reflect: [0, 0.4, 0.8, 1.2, 1.6, 2],
							mindful: [0, 0, 0, 0, 0, 0],
							global: [0, 1, 2, 3, 4, 5],
							imagineering: [0, 0.8, 1.6, 2.4, 3.2, 4],
						}
					},
					{
						question: `I've been able to pinpoint my biases and try my best to overcome them.`,
						answer: null,
						score: {
							reflect: [0, 0.4, 0.8, 1.2, 1.6, 2],
							mindful: [0, 0, 0, 0, 0, 0],
							global: [0, 1, 2, 3, 4, 5],
							imagineering: [0, 0.8, 1.6, 2.4, 3.2, 4],
						}
					},
					{
						question: `Society would be better off if people put aside their differences.`,
						answer: null,
						score: {
							reflect: [0, 0.4, 0.8, 1.2, 1.6, 2],
							mindful: [0, 0, 0, 0, 0, 0],
							global: [0, 1, 2, 3, 4, 5],
							imagineering: [0, 0.8, 1.6, 2.4, 3.2, 4],
						}
					},
					{
						question: `I've learned a lot from people I once though didn't have much in common with me.`,
						answer: null,
						score: {
							reflect: [0, 0.4, 0.8, 1.2, 1.6, 2],
							mindful: [0, 0, 0, 0, 0, 0],
							global: [0, 1, 2, 3, 4, 5],
							imagineering: [0, 0.8, 1.6, 2.4, 3.2, 4],
						}
					},
					{
						question: `The times I've traveled outside my boundaries (group, city, state, country) have taught me valuable lessons`,
						answer: null,
						score: {
							reflect: [0, 0.4, 0.8, 1.2, 1.6, 2],
							mindful: [0, 0, 0, 0, 0, 0],
							global: [0, 1, 2, 3, 4, 5],
							imagineering: [0, 0.8, 1.6, 2.4, 3.2, 4],
						}
					},
					{
						question: `Most of my behavior falls within society's stereotypical expectations of me.`,
						answer: null,
						score: {
							reflect: [4, 3.2, 2.4, 1.6, 0.8, 0],
							mindful: [0, 0, 0, 0, 0, 0],
							global: [5, 4, 3, 2, 1, 0],
							imagineering: [3, 2.4, 1.8, 1.2, 0.6, 0],
						}
					},
					{
						question: `I have friends and associates from many different places.`,
						answer: null,
						score: {
							reflect: [0, 0.4, 0.8, 1.2, 1.6, 2],
							mindful: [0, 0, 0, 0, 0, 0],
							global: [0, 1, 2, 3, 4, 5],
							imagineering: [0, 0.8, 1.6, 2.4, 3.2, 4],
						}
					},
					{
						question: `I find myself frustrated with stereotypes and prejudices.`,
						answer: null,
						score: {
							reflect: [0, 0.4, 0.8, 1.2, 1.6, 2],
							mindful: [0, 0, 0, 0, 0, 0],
							global: [0, 1, 2, 3, 4, 5],
							imagineering: [0, 0.8, 1.6, 2.4, 3.2, 4],
						}
					},
					{
						question: `In general, I think it's best to find a common ground with those I don't see eye to eye with.`,
						answer: null,
						score: {
							reflect: [0, 0.4, 0.8, 1.2, 1.6, 2],
							mindful: [0, 0, 0, 0, 0, 0],
							global: [0, 1, 2, 3, 4, 5],
							imagineering: [0, 0.8, 1.6, 2.4, 3.2, 4],
						}
					},
					{
						question: `I am able to communicate in more than one language.`,
						answer: null,
						score: {
							reflect: [0, 0, 0, 0, 0, 0],
							mindful: [0, 0, 0, 0, 0, 0],
							global: [0, 1, 2, 3, 4, 5],
							imagineering: [0, 0.8, 1.6, 2.4, 3.2, 4]
						}
					},
				],
				[
					{
						question: `I am living a creative life, by choice.`,
						answer: null,
						score: {
							reflect: [0, 0.4, 0.8, 1.2, 1.6, 2],
							mindful: [0, 0, 0, 0, 0, 0],
							global: [0, 0.8, 1.6, 2.4, 3.2, 4],
							imagineering: [0, 1, 2, 3, 4, 5]
						}
					},
					{
						question: `I have role models who have inspired me to take the road less traveled.`,
						answer: null,
						score: {
							reflect: [0, 0.4, 0.8, 1.2, 1.6, 2],
							mindful: [0, 0, 0, 0, 0, 0],
							global: [0, 0.8, 1.6, 2.4, 3.2, 4],
							imagineering: [0, 1, 2, 3, 4, 5]
						}
					},
					{
						question: `My values are represented in my everyday behavior.`,
						answer: null,
						score: {
							reflect: [0, 0.4, 0.8, 1.2, 1.6, 2],
							mindful: [0, 0, 0, 0, 0, 0],
							global: [0, 0.8, 1.6, 2.4, 3.2, 4],
							imagineering: [0, 1, 2, 3, 4, 5]
						}
					},
					{
						question: `I am able to set boundaries so that other people's priorities don't run my life.`,
						answer: null,
						score: {
							reflect: [0, 0.4, 0.8, 1.2, 1.6, 2],
							mindful: [0, 0, 0, 0, 0, 0],
							global: [0, 0.8, 1.6, 2.4, 3.2, 4],
							imagineering: [0, 1, 2, 3, 4, 5]
						}
					},
					{
						question: `Ethics are important to me.`,
						answer: null,
						score: {
							reflect: [0, 0, 0, 0, 0, 0],
							mindful: [0, 0.4, 0.8, 1.2, 1.6, 2],
							global: [0, 0.8, 1.6, 2.4, 3.2, 4],
							imagineering: [0, 1, 2, 3, 4, 5]
						}
					},
					{
						question: `I am able to take needed breaks, rests or vacations from my demands.`,
						answer: null,
						score: {
							reflect: [0, 0.4, 0.8, 1.2, 1.6, 2],
							mindful: [0, 0.8, 1.6, 2.4, 3.2, 4],
							global: [0, 0, 0, 0, 0, 0],
							imagineering: [0, 1, 2, 3, 4, 5]
						}
					},
					{
						question: `My work (school and/or employment) consumes me more than I'd like.`,
						answer: null,
						score: {
							reflect: [2, 1.6, 1.2, 0.8, 0.4, 0],
							mindful: [4, 3.2, 2.4, 1.6, 0.8, 0],
							global: [0, 0, 0, 0, 0, 0],
							imagineering: [5, 4, 3, 2, 1, 0]
						}
					},
					{
						question: `The kind of pace I'm keeping is sustainable.`,
						answer: null,
						score: {
							reflect: [0, 0.4, 0.8, 1.2, 1.6, 2],
							mindful: [0, 0.8, 1.6, 2.4, 3.2, 4],
							global: [0, 0, 0, 0, 0, 0],
							imagineering: [0, 1, 2, 3, 4, 5]
						}
					},
					{
						question: `There's room in my life for leisure/fun.`,
						answer: null,
						score: {
							reflect: [0, 0.4, 0.8, 1.2, 1.6, 2],
							mindful: [0, 0.8, 1.6, 2.4, 3.2, 4],
							global: [0, 0, 0, 0, 0, 0],
							imagineering: [0, 1, 2, 3, 4, 5]
						}
					},
					{
						question: `I have a solid amount of confidence in my ability to learn new things.`,
						answer: null,
						score: {
							reflect: [0, 0.4, 0.8, 1.2, 1.6, 2],
							mindful: [0, 0.8, 1.6, 2.4, 3.2, 4],
							global: [0, 0, 0, 0, 0, 0],
							imagineering: [0, 1, 2, 3, 4, 5]
						}
					},
					{
						question: `I'm commited to finding new growth opportunities.`,
						answer: null,
						score: {
							reflect: [0, 0.4, 0.8, 1.2, 1.6, 2],
							mindful: [0, 0.8, 1.6, 2.4, 3.2, 4],
							global: [0, 0, 0, 0, 0, 0],
							imagineering: [0, 1, 2, 3, 4, 5]
						}
					},
				]
			],
			drag_drop: {
				paragraphs: [
					"Now it's time to rank your personal values. Select your top 3 from the dropdowns. All values are listed below the dropdowns for reference.",
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
			},
			results: {
				reflect: 0,
				mindful: 0,
				global: 0,
				imagineering: 0
			},
			scoring_key: {
				reflect: [122, 100, 79],
				mindful: [100, 83, 65],
				global: [95, 78, 62],
				imagineering: [105, 86, 68]
			},
			name: ""
		}
	},
	methods: {
		getTerms: function(data) {
			var self = this;
        	Vue.nextTick(function(){
				$.ajax({
					type: "GET",
					url: "./api/quiz_terms.json",
					contentType: "application/json",
					success: function(returnData) {
						self.termsConditions = './uploads/resources/'+returnData.data[0].terms;  
					},
					error: function(jqXHR, textStatus, errorThrown) {
						//console.log(errorThrown);
					}
				});
			});
		},
		highestArea: function() {
			var list = [
				{ name: "reflective", score: this.results.reflect/138 },
				{ name: "mindful", score: this.results.mindful/118 },
				{ name: "global", score: this.results.global/112 },
				{ name: "imaginative", score: this.results.imagineering/123 }
			];
			var currentName;
			var max;
			for (var i = 0; i < list.length; i++) {
				if (max == null || list[i].score > max) {
					max = list[i].score;
					currentName = list[i].name;
				}
			}
			return currentName;
		},
		lowestAreas: function() {
			var list = [
				{ name: "reflective", score: this.results.reflect/138 },
				{ name: "mindful", score: this.results.mindful/118 },
				{ name: "global", score: this.results.global/112 },
				{ name: "imaginative", score: this.results.imagineering/123 }
			];
			var sorted = list.sort(function(a, b) {
			    return a.score - b.score;
			});
			return sorted[0].name + " and " + sorted[1].name;
		},
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
		printScreen: function() {
			window.print();
		},
		questionsAnswered: function(qPage) {
			//return true;
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
			// ** Calculate scoring **
			// First gotta clear so doesn't infinitley add if called again somehow
			this.results.reflect = 0;
			this.results.mindful = 0;
			this.results.global = 0;
			this.results.imagineering = 0;
			// Go through all of the base questions
			for (var i=0; i < this.questions.length; i++) {
				for (var j=0; j < this.questions[i].length; j++) {
					this.results.reflect += (this.questions[i][j].score.reflect[(this.questions[i][j].answer - 1)] );
					this.results.mindful += (this.questions[i][j].score.mindful[(this.questions[i][j].answer - 1)] );
					this.results.global += (this.questions[i][j].score.global[(this.questions[i][j].answer - 1)] );
					this.results.imagineering += (this.questions[i][j].score.imagineering[(this.questions[i][j].answer - 1)] );
				}
			}
			// Mindset question scoring
			this.results.reflect += (5 - (this.mindset_question.answer * 2.5));
			// ** Next page and display results **
			var that = this;
			Vue.nextTick(function(){
				that.step++;
				window.scroll(0, 0);
			});
		}
	},
	mounted: function(){
		this.getTerms();
    },
});


// ---------------- Parent Vue Section ----------------

// 5. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const vm = new Vue({
    data: {}
}).$mount('#content');
