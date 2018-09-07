import React from "react";
import "./styles.css";

const Contacts = () => (
	<div id="form-container">
		<form name="contact" method="POST" netlify>
			<div class="form-row-container">
				<p>Email</p>
				<input type="email" name="_replyto" required="true" />
			</div>
			<div class="form-row-container">
				<p>Subject</p>
				<input type="text" name="subject" required="true" />
			</div>
			<div class="form-row-container">
				<p>Message</p>
				<textarea name="message" required="true" />
			</div>
		</form>
		<hr /> <button id="save">Save</button>
	</div>
);

export default Contacts;
