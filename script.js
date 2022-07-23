let mtnRegex = /^(0803)|^(0816)|^(0903)|^(0810)|^(0806)|^(0703)|^(0706)|^(0813)|^(0814)|^(0906)/;
let airtelRegex = /^(0907)|^(0708)|^(0802)|^(0902)|^(0812)|^(0808)|^(0701)/;
let gloRegex = /^(0805)|^(0905)|^(0807)|^(0811)|^(0705)|^(0815)/;
let nineMobileRegex = /^(0909)|^(0908)|^(0818)|^(0809)|^(0701)/;

let mtn2Regex = /^(\+[0-9]{3}803)|^(\+[0-9]{3}816)|^(\+[0-9]{3}903)|^(\+[0-9]{3}810)|^(\+[0-9]{3}806)|^(\+[0-9]{3}703)|^(\+[0-9]{3}706)|^(\+[0-9]{3}813)|^(\+[0-9]{3}814)|^(\+[0-9]{3}906)/;
let airtel2Regex = /^(\+[0-9]{3}907)|^(\+[0-9]{3}708)|^(\+[0-9]{3}802)|^(\+[0-9]{3}902)|^(\+[0-9]{3}812)|^(\+[0-9]{3}808)|^(\+[0-9]{3}701)/;
let glo2Regex = /^(\+[0-9]{3}805)|^(\+[0-9]{3}905)|^(\+[0-9]{3}807)|^(\+[0-9]{3}811)|^(\+[0-9]{3}705)|^(\+[0-9]{3}815)/;
let nineMobile2Regex = /^(\+[0-9]{3}909)|^(\+[0-9]{3}908)|^(\+234818)|^(\+234809)|^(\+234701)/;

let image = document.querySelector(".image");
let input = document.querySelector("input");

function validate() {
	if (input.value != "" && input.value.length >= 11) {
		input.setAttribute("type", "text");
		image.style.display = "block";
		if (input.value.match(mtnRegex) || input.value.match(mtn2Regex)) {
			image.style.background = 'url("mtn2.png")';
		} else if (input.value.match(airtelRegex) || input.value.match(airtel2Regex)) {
			image.style.background = 'url("airtel2.jpg")'
		} else if (input.value.match(gloRegex) || input.value.match(glo2Regex)) {
			image.style.background = 'url("Glo2.png")'
		} else if (input.value.match(nineMobileRegex) || input.value.match(nineMobile2Regex)) {
			image.style.background = 'url("9mobile2.png")'
		} else {
			image.style.background = "grey"
		}
	} else {
		input.setAttribute("type", "tel")
		image.style.display = "none"
	}
}