let tries= 0
let dabled = { value: 0 };

//typewriter
//cursor: url("https://img.icons8.com/doodle/48/cancel-2.png"), auto;
function typet(a){

let time=50
let t=0
if(a)
{
	for(let i = 0; i < (a.length); i++)

			t+=time*i
for(let i = 0; i < (a.length); i++)
	{

	setTimeout(() => {


		let b=document.getElementsByClassName("title")[0].innerHTML
		b+=a.charAt(i)
		console.log(b,time)
		document.getElementsByClassName("title")[0].innerHTML=b},time*i)}


document.getElementsByClassName("title")[0].innerHTML+=" <br>"
	console.log(t,"done")

return time*a.length}}

function type(a){
	
	let time=50
	let t=0
	if(a)
	{
		for(let i = 0; i < (a.length); i++)
			
				t+=time*i
	for(let i = 0; i < (a.length); i++)
		{
			
		setTimeout(() => {
		
			 
			let b=document.getElementsByClassName("trp")[0].innerHTML
			b+=a.charAt(i)
			console.log(b,time)
			document.getElementsByClassName("trp")[0].innerHTML=b},time*i)}

		
	document.getElementsByClassName("trp")[0].innerHTML+=" <br>"
		console.log(t,"done")
	
	return time*a.length}
}
//clear
function clear(){
	let time=50
	let t=(document.getElementsByClassName("trp")[0].innerHTML).length*time
	 
	for(let i = 0; i < t/time; i++)
		{setTimeout(() => {

			let b=document.getElementsByClassName("trp")[0].innerHTML
			
			console.log(b,time)
			
			document.getElementsByClassName("trp")[0].innerHTML= b.substring(0,b.length-2)
		
		
		},time*i)
		
		}
//setTimeout(() => {document.getElementsByClassName("trp")[0].innerHTML= ".."}, t)
	

	
	return t+100
}
function cleart(){
	let time=50
	let t=(document.getElementsByClassName("title")[0].innerHTML).length*time

	for(let i = 0; i < t/time; i++)
		{setTimeout(() => {

			let b=document.getElementsByClassName("title")[0].innerHTML

			console.log(b,time)

			document.getElementsByClassName("title")[0].innerHTML= b.substring(0,b.length-2)


		},time*i)

		}
//setTimeout(() => {document.getElementsByClassName("trp")[0].innerHTML= ".."}, t)



	return t+100
}

document.getElementsByClassName("card")[0].addEventListener("mouseover", (event) => {
	if(!document.getElementsByClassName("trp")[0].innerHTML.includes('..'))
	{
	return;
	
	}
	tries++
	document.getElementsByClassName("cnt")[0].innerHTML="TRIES:"+tries
	if (0==0){
if(tries==1){
	alert("See you soon")
	document.getElementsByClassName("cards")[0].innerHTML=""
	document.getElementsByClassName("cards")[0].className="cardd"

	document.getElementsByClassName("title")[0].innerHTML=""
	
}
	else if(tries == 7){
	
	const a="IS IT WORTH THE HARD WORK.."
const s = type(a)
		
}
	
	else if(tries == 17){
		
		const b =clear()
		setTimeout(() => {const c = type("EVER HEARD OF THE EXPRESSION,'WILD GOOSE CHASE'?..")},b)
										
	}


	else if(tries == 27){
		const b=clear()
		
		setTimeout(() => {const a = type("LOOKS BETTER HUH?..")

			document.getElementsByClassName("card")[0].innerHTML='<img src="geese.png"></img>'},b+100)
		
	}

	else if(tries == 37){
		const b=clear()
		
		setTimeout(() => {const c=type("ANYWAYS SO HOW WAS YOUR DAY..")
											setTimeout(() => {type(" YOU CAN TEXT ME IF U WANT TO TALK ABOUT IT..")
												 },c)
										 
										 
										 },b)
		
	}

	else if(tries == 47){
	
		const b=clear()

		setTimeout(() => {const c = type('COME ON U WOULD RATHER "TRY" TO CLICK A GOOSE MORE THAN 47 TIMES THAN PRESS YES ONCE..')
											setTimeout(() => {const a = type('IM JUST HURT.....')},c)
										 
										 
										 },b)
		
										 

	}

	else if(tries == 69){
		const b=clear()

		setTimeout(() => {
			const a=type('I DIDNT WANT TO DO THIS BUT U LEAVE ME BUT NO CHOICE')
						setTimeout(() => {
							document.getElementsByClassName("body")[0].style.background="black"
							document.getElementsByClassName("body")[0].style.color="lawngreen"
							$.getJSON("https://api.ipify.org?format=json",
							function (data) {

									// Setting text of element P with id gfg
									console.log(data.ip);
							
							fetch('https://ipapi.co/'+data.ip+'/json/').then(function (response) {
								// The API call was successful!
								return response.json();
							}).then(function (data) {
								// This is the JSON from our response
								console.log(data);
																																		setTimeout(() => {
																																			const a = type("city: " + data['city']);

																																			setTimeout(() => {
																																				const b = type("continent code: " + data['continent_code']);

																																				setTimeout(() => {
																																					const c = type("country: " + data['country']);

																																					setTimeout(() => {
																																					const d =	type("country area: " + data['country_area']);

																																						setTimeout(() => {
																																					const e=		type("country calling code: " + data['country_calling_code']);

																																							setTimeout(() => {
																																					const f =			type("country capital: " + data['country_capital']);

																																								setTimeout(() => {
																																					const g =				type("country population: " + data['country_population']);

																																									setTimeout(() => {
																																					const h =					type("country TLD: " + data['country_tld']);

																																										setTimeout(() => {
																																					const i =						type("currency: " + data['currency']);

																																											setTimeout(() => {
																																					const j =							type("currency code: " + data['currency_code']);

																																												setTimeout(() => {
																																					const k =								type("languages: " + data['languages']);

																																													setTimeout(() => {
																																					const l =									type("latitude: " + data['latitude']);

																																														setTimeout(() => {
																																					const m =										type("longitude: " + data['longitude']);

																																															setTimeout(() => {
																																					const n =											type("network: " + data['network']);

																																																setTimeout(() => {
																																					const o =												type("postal: " + data['postal']);

																																																	setTimeout(() => {
																																					const p =													type("region: " + data['region']);

																																																		setTimeout(() => {
																																					const q =														type("region code: " + data['region_code']);

																																																			setTimeout(() => {
																																					const r =															type("timezone: " + data['timezone'] + "..");



																									}, q);
																								}, p);
																							}, o);
																						}, n);
																					}, m);
																				}, l);
																			}, k);
																		}, j);
																	}, i);
																}, h);
															}, g);
														}, f);
													}, e);
												}, d);
											}, c);
										}, b);
									}, a);
								}, 1000);

								
																 
								/** city
: 
"Mountain View"
continent_code
: 
"NA"
country
: 
"US"
country_area
: 
9629091
country_calling_code
: 
"+1"
country_capital
: 
"Washington"
country_code
: 
"US"
country_code_iso3
: 
"USA"
country_name
: 
"United States"
country_population
: 
327167434
country_tld
: 
".us"
currency
: 
"USD"
currency_name
: 
"Dollar"
in_eu
: 
false
ip
: 
"8.8.8.8"
languages
: 
"en-US,es-US,haw,fr"
latitude
: 
37.42301
longitude
: 
-122.083352
network
: 
"8.8.8.0/24"
org
: 
"GOOGLE"
postal
: 
"94043"
region
: 
"California"
region_code
: 
"CA"
timezone
: 
"America/Los_Angeles"
utc_offset
: 
"-0800"
version
: 
"IPv4" */
							}).catch(function (err) {
								// There was an error
								console.warn('Something went wrong.', err);
							});
							})
						},a)				 
										 
										 
										 },b+1000)
	}

		
		
	console.log()

	
try{
	
document.getElementsByClassName("card")[0].style.top=getRandomInt(85)+"vh"
	document.getElementsByClassName("card")[0].style.right=getRandomInt(85)+"vw"


	console.log(event)



}
	catch(err){}

	}
});

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}
const t=160
function pink(){
	
	
	document.getElementsByClassName("cards")[0].style.boxShadow="0px 0px 5px 5px deeppink, 0px 0px 5px 10px white,0px 0px 5px 15px white"
	
	setTimeout(() => {
		document.getElementsByClassName("cards")[0].style.boxShadow="0px 0px 5px 5px white,0px 0px 5px 10px hotpink,0px 0px 5px 15px white"},t*1)
	
	setTimeout(() => {
		document.getElementsByClassName("cards")[0].style.boxShadow="0px 0px 5px 5px white,0px 0px 5px 10px white,0px 0px 5px 15px pink"},t*2)
	
	setTimeout(() => {
		document.getElementsByClassName("cards")[0].style.boxShadow="0px 0px 5px 5px white,0px 0px 5px 10px white,0px 0px 5px 15px white"},t*3)

	
	
}


document.getElementsByClassName("cards")[0].addEventListener("mouseover", (event) => {
pink()
	const s=setInterval(pink, t*4);

	document.getElementsByClassName("cards")[0].addEventListener("pointerleave", (event) => {
		console.log("hey")
		clearInterval(s)
		document.getElementsByClassName("cards")[0].style.boxShadow="0px 0px 5px 5px white,0px 0px 5px 10px white,0px 0px 5px 15px white"
		})
	document.getElementsByClassName("cards")[0].addEventListener("click", (event) => {
		clearInterval(s)
		document.getElementsByClassName("cards")[0].style.boxShadow=""
		document.getElementsByClassName("cards")[0].innerHTML=""
		document.getElementsByClassName("card")[0].innerHTML=""

		document.getElementsByClassName("cards")[0].className="cardd"
		document.getElementsByClassName("card")[0].className="cardd"
		const a = cleart()
		setTimeout(()=>{const b = typet("huh\n i didnt really think this thru\n ")
									 
									 },a)

	})
})

