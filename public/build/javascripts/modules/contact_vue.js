// ---------------- Components Section ----------------

// 4. Define the components to be used by the Vue instance
// Each Vue component consists of the HTML tag that will be used for
// it (Vue swaps it out for it's template during rendering) and its data

// <home-feed>
Vue.component('contact-form', {
	template: `<div>
		<div class="contact-method-select">
			<div class="contact-method" @click="mode='speak'" :class="{ selected: mode == 'speak' }" >
				<p>Looking for her to speak at an event</p>
			</div>
			<div class="contact-method" @click="mode='workshop'" :class="{ selected: mode == 'workshop' }">
				<p>Want her to do a workshop</p>
			</div>
			<div class="contact-method" @click="mode='orders'" :class="{ selected: mode == 'orders' }">
				<p>Questions regarding bulk book orders</p>
			</div>
			<div class="contact-method" @click="mode='general'" :class="{ selected: mode == 'general' }">
				<p>General Inquiry or reason not listed</p>
			</div>
		</div>

		<div class="contact-form-wrapper">
			<div class="success-message">
				<p class="text">Thanks for filling out this form - your message has been sent to Dr. Kris. She'll get 
				back to you as soon as possible, so stay tuned and keep an eye out for that response in your inbox!</p>
			</div>
			<div class="contact-form">
				<div class="form-row">
					<div class="_half form-content">
						<label class="label">Email Address <span class="required">*Required</span></label>
						<input v-model="email" class="form-el" type="text" placeholder="example@email.com">
					</div>
					<div class="_half form-content">
						<label class="label">Phone Number</label>
						<input v-model="phone" class="form-el" type="text" placeholder="(XXX) XXX-XXXX">
					</div>
				</div>
				<div class="form-row" v-if="mode=='general'">
					<div class="form-content">
						<label class="label">Subject of Inquiry <span class="required">*Required</span></label>
						<input v-model="subject" class="form-el" type="text" placeholder="Interested in speaking at...">
					</div>
				</div>
				<div class="form-row">
					<div class="form-content">
						<label class="label">Your message <span class="required">*Required</span></label>
						<textarea v-model="message" class="form-el" rows="6" placeholder="Enter the body of your message here"></textarea>
					</div>
				</div>
				<button class="submit-contact button primary" :disabled="!canSubmit" @click="submit">Send Message</button>
			</div>
		</div>
	</div>`,
	data: function() {
		return {
			email: "",
			phone: "",
			subject: "",
			message: "",
			mode: "general"
		}
	},
	methods: {
		submit: function(){
			// Setup subject
			var new_subj = "";
			if (this.mode == "speak") {
				new_subj = "Re: Speaking at event";
			} else if (this.mode == "workshop"){
				new_subj = "Re: Holding a workshop";
			} else if (this.mode == "orders"){
				new_subj = "Re: Bulk order of books";
			} else {
				new_subj = this.subject;
			}

			// Setup POST for email script
			var self = this;
			$.ajax({
				method: 'POST',
				url: "https://script.google.com/macros/s/AKfycbwAf3o2EXesJBwVlKHF5ogFkpOHtmoHtYgZhnnLok4RY7_OWZs/exec",
				data: { 
					email: self.email, 
					subject: self.subject, 
					body: self.message,
					phone: self.phone
				}, 
				success: function(returnData) {
					self.submitSuccess();
				}, 
				error: function(jqXHR, status, error) {
					console.log(error);
				}
			});
		},
		submitSuccess: function() {
			$('.contact-form-wrapper').addClass('success');
		},
		validPhone: function(phone){
			var reg = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
			return phone.match(reg);
		}
	},
	computed: {
        canSubmit: function() {
            return this.email !== "" && 
            	(this.subject !== "" && this.mode == "general" || this.mode !== "general") &&
            	this.message !== "";
        }
    },
});


// ---------------- Parent Vue Section ----------------

// 5. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const vm = new Vue({
    data: {}
}).$mount('#content');
