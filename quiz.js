
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var currentWindow = window.location.pathname;

var counter = 0;

const q1 = urlParams.get('q1');
if(q1 != null) counter++;
const q2 = urlParams.get('q2');
if(q2 != null) counter++;
const q3 = urlParams.get('q3');
if(q3 != null) counter++;
const q4 = urlParams.get('q4');
if(q4 != null) counter++;
const q5 = urlParams.get('q5');
if(q5 != null) counter++;
const q6 = urlParams.get('q6');
if(q6 != null) counter++;
const q7 = urlParams.get('q7');
if(q7 != null) counter++;
const q8 = urlParams.get('q8');
if(q8 != null) counter++;
const q9 = urlParams.get('q9');
if(q9 != null) counter++;
const q10 = urlParams.get('q10');
if(q10 != null) counter++;
const q11 = urlParams.get('q11');
if(q11 != null) counter++;

console.log(currentWindow);

if(counter < 5 && currentWindow == "/C:/Users/hdoru/Desktop/ise304%20new/result.html"){
	alert("you have answered less than 5 questions! To display the best movie for you should answer more questions!");
	window.location.href = "/C:/Users/hdoru/Desktop/ise304%20new/quiz.html";

}

console.log(counter);

var p_comedy = 0 ;
var p_action = 0 ;
var p_drama = 0 ;
var p_horror = 0 ;
var p_romantic = 0 ;
var p_animation = 0 ;

if (q1 == "Male") {
	p_comedy += 5 ;
	p_animation += 3;
	p_romantic += 0 ;
	p_action += 10 ;
	p_drama += 2 ;
	p_horror += 10;
}
else if ( q1 == "Female" ) { 
	p_action += 0 ;
	p_horror += 2 ;
	p_romantic += 10;
	p_comedy += 3 ;
	p_animation += 1 ;
	p_drama += 8 ;
}
else if ( q1 == "Prefer not to answer!" ) { 
	p_action += 1;
	p_horror += 2 ;
	p_romantic += 8;
	p_comedy += 1 ;
	p_animation += 1 ;
	p_drama += 10 ;
}

if (q2 == "Below 10") {
	p_action += -5;
	p_horror += -12 ;
	p_romantic += 0;
	p_comedy += 10 ;
	p_animation += 50 ;
	p_drama += 0 ;
}
else if (q2 == "10-18") {
	p_action += 10;
	p_horror += 4 ;
	p_romantic += 0;
	p_comedy += 6 ;
	p_animation += 4 ;
	p_drama += 0 ;
}
else if (q2 == "18-24") {
	p_action += 9;
	p_horror += 7 ;
	p_romantic += 6;
	p_comedy += 4 ;
	p_animation += 2 ;
	p_drama += 5 ;
}
else if (q2 == "25-34") {
	p_action += 5;
	p_horror += 8 ;
	p_romantic += 7;
	p_comedy += 5 ;
	p_animation += 2 ;
	p_drama += 6 ;
}
else if (q2 == "35-44") {
	p_action += 3;
	p_horror += 5 ;
	p_romantic += 7;
	p_comedy += 6 ;
	p_animation += 1 ;
	p_drama += 8 ;
}
else if (q2 == "45-65") {
	p_action += 2;
	p_horror += 6;
	p_romantic += 10;
	p_comedy += 4 ;
	p_animation += 1 ;
	p_drama += 9 ;
}
else if (q2 == "Above 65") {
	p_action += 0;
	p_horror += 1;
	p_romantic += 8;
	p_comedy += 3 ;
	p_animation += 1 ;
	p_drama += 10 ;
}

if (q3 == "Perfect") {
	p_action += 3 ;
	p_horror += 2 ;
	p_drama += 4 ;
	p_romantic += 10 ;
	p_animation += 8 ;
	p_comedy += 9 ;
}

else if (q3 == "Average") {
	p_action += 5 ;
	p_horror += 5 ;
	p_drama += 5 ;
	p_romantic += 5 ;
	p_animation += 5 ;
	p_comedy += 5 ;
}

else if (q3 == "Stressful") {
	p_action += 1 ;
	p_horror += 2 ;
	p_drama += 4 ;
	p_romantic += 10 ;
	p_animation += 5 ;
	p_comedy += 7 ;
}

if (q4 == "Depressed") {
	p_action += 5 ;
	p_horror += 7 ;
	p_drama += 10 ;
	p_romantic += 1;
	p_animation += 2 ;
	p_comedy += 3 ;
}
else if (q4 == "Cheerful") {
	p_action += 1 ;
	p_horror += 2 ;
	p_drama += 4 ;
	p_romantic += 7;
	p_animation += 5 ;
	p_comedy += 10 ;
}
else if (q4 == "Peaceful") {
	p_action += 1 ;
	p_horror += 2 ;
	p_drama += 4 ;
	p_romantic += 10;
	p_animation += 5 ;
	p_comedy += 7 ;
}
else if (q4 == "Annoyed") {
	p_action += 10 ;
	p_horror += 8 ;
	p_drama += 6 ;
	p_romantic += 3;
	p_animation += 2 ;
	p_comedy += 1 ;
}

if (q5 == "Comedy") {
	p_action += 1 ;
	p_horror += 2 ;
	p_drama += 3 ;
	p_romantic += 5;
	p_animation += 7 ;
	p_comedy += 10 ;
}
else if (q5 == "Action") {
	p_action += 10 ;
	p_horror += 8 ;
	p_drama += 5 ;
	p_romantic += 3;
	p_animation += 2 ;
	p_comedy += 1 ;
}
else if (q5 == "Horror") {
	p_action += 7 ;
	p_horror += 10 ;
	p_drama += 4 ;
	p_romantic += 3;
	p_animation += 2 ;
	p_comedy += 1 ;
}
else if (q5 == "Drama") {
	p_action += 3 ;
	p_horror += 4 ;
	p_drama += 10 ;
	p_romantic += 7;
	p_animation += 2 ;
	p_comedy += 1 ;
}
else if (q5 == "Romantic") {
	p_action += 1 ;
	p_horror += 1 ;
	p_drama += 8 ;
	p_romantic += 10;
	p_animation += 2 ;
	p_comedy += 1 ;
}

if (q6 == "Comedy") {
	p_action += 1 ;
	p_horror += 2 ;
	p_drama += 3 ;
	p_romantic += 5;
	p_animation += 7 ;
	p_comedy += 10 ;
}
else if (q6 == "Action") {
	p_action += 10 ;
	p_horror += 8 ;
	p_drama += 5 ;
	p_romantic += 3;
	p_animation += 2 ;
	p_comedy += 1 ;
}
else if (q6 == "Horror") {
	p_action += 7 ;
	p_horror += 10 ;
	p_drama += 4 ;
	p_romantic += 3;
	p_animation += 2 ;
	p_comedy += 1 ;
}
else if (q6 == "Drama") {
	p_action += 3 ;
	p_horror += 4 ;
	p_drama += 10 ;
	p_romantic += 7;
	p_animation += 2 ;
	p_comedy += 1 ;
}
else if (q6 == "Romantic") {
	p_action += 1 ;
	p_horror += 1 ;
	p_drama += 8 ;
	p_romantic += 10;
	p_animation += 2 ;
	p_comedy += 1 ;
}

if (q7 == "TV") {
	p_action += 10;
	p_horror += 5 ;
	p_romantic += 7;
	p_comedy += 6 ;
	p_animation += 1 ;
	p_drama += 8 ;
}
else if (q7 == "Movie Theater") {
	p_action += 9;
	p_horror += 7 ;
	p_romantic += 6;
	p_comedy += 4 ;
	p_animation += 2 ;
	p_drama += 5 ;
}
else if (q7 == "Digital Platform") {
	p_action += 10;
	p_horror += 8 ;
	p_romantic += 7;
	p_comedy += 5 ;
	p_animation += 2 ;
	p_drama += 6 ;
}
else if (q7 == "Other") {
	p_comedy += 0 ;
	p_action += 0 ;
	p_drama += 0 ;
	p_horror += 0 ;
	p_romantic += 0 ;
	p_animation += 0 ;
}

if (q8 == "Red") {
	p_action += 10 ;
}
else if (q8 == "Blue") {
	p_animation += 8 ;
	p_comedy += 10 ;
}
else if (q8 == "Green") {
	p_romantic += 10 ;
	p_drama += 9 ;
}
else if (q8 == "Black") {
	p_horror += 10 ;
}

if (q9 == "A clueless man or woman who succeeds in the end.") {
	p_drama += 10 ;
}
else if (q9 == "A fearless character with a lot of common sense.") {
	p_action += 10 ;
}
else if (q9 == "A character that may encounter failures but that you can't help rooting for.") {
	p_animation += 10 ;
}
else if (q9 == "I don't do the heroes and villains thing. It's too black and white.") {
	p_romantic += 10 ;
}
else if (q9 == "If anything, someone taken from history or current events.") {
	p_horror += 10;
}

if (q10 == "Me and my friends getting together so we can have a good laugh.") {
	p_comedy += 10 ;
	p_animation += 7 ;
}
else if (q10 == "Me and a close friend watching something really high-energy.") {
	p_action += 10 ;
}
else if (q10 == "Me and a close friend enjoying a good story.") {
	p_romantic += 10 ;
}
else if (q10 == "Me and some friends trying to scare ourselves senseless.") {
	p_horror += 10 ;
}
else if (q10 == "Me watching something intellectually stimulating on my laptop.") {
	p_drama += 10;
}

var temp = 0 ;
const array = [p_comedy, p_action, p_drama, p_horror, p_romantic, p_animation];

for (var i=0; i<6; i++) {
	if (array[i] > temp) {
		temp = array[i] ;
	}
}

const data = 
    { "comedy" : 
        [
        {
            "movieName": "Modern Times",
            "dir": "./moviePosters/ModernTimes.jpeg",
			"desc": "The Tramp struggles to live in modern industrial society with \
			the help of a young homeless woman.",
		},
		{
			"movieName": "La vita è bella",
            "dir": "./moviePosters/endgame.jpeg",
            "desc": "When an open-minded Jewish librarian and his son become victims of the Holocaust, he uses a perfect mixture of will, humor, and imagination to protect his son from the dangers around their camp.",
		},
		{
			"movieName": "3 Idiots",
            "dir": "./moviePosters/endgame.jpeg",
            "desc": "Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently, even as the rest of the world called them idiots.",
		},
		{
			"movieName": "Snatch",
            "dir": "./moviePosters/endgame.jpeg",
            "desc": "Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond.",
		},
		{
			"movieName": "City Lights",
            "dir": "./moviePosters/endgame.jpeg",
            "desc": "With the aid of a wealthy erratic tippler, a dewy-eyed tramp who has fallen in love with a sightless flower girl accumulates money to be able to help her medically.",
		},
		{
			"movieName": "The Truman Show",
            "dir": "./moviePosters/endgame.jpeg",
            "desc": "An insurance salesman discovers his whole life is actually a reality TV show.",
		},
		{
			"movieName": "Relatos salvajes",
            "dir": "./moviePosters/endgame.jpeg",
            "desc": "Six short stories that explore the extremities of human behavior involving people in distress.",
		},
		{
			"movieName": "The Grand Budapest Hotel",
            "dir": "./moviePosters/endgame.jpeg",
            "desc": "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
		},
		{
			"movieName": "Back to the Future",
            "dir": "./moviePosters/endgame.jpeg",
            "desc": "Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.",
		},
		{
			"movieName": "Intouchables",
            "dir": "./moviePosters/endgame.jpeg",
            "desc": "After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.",
		}
        ]
    ,
    
    "action" :
	[
        {
            "movieName": "Kill Bill: Vol. 1",
            "dir": "./moviePosters/ModernTimes.jpeg",
			"desc": "After awakening from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her.",
		},
		{
			"movieName": "The Dark Knight",
            "dir": "./moviePosters/endgame.jpeg",
            "desc": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
		},
		{
			"movieName": "The Lord of the Rings: The Return of the King",
            "dir": "./moviePosters/endgame.jpeg",
            "desc": "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
		},
		{
			"movieName": "Inception",
            "dir": "./moviePosters/endgame.jpeg",
            "desc": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
		},
		{
			"movieName": "The Matrix",
            "dir": "./moviePosters/endgame.jpeg",
            "desc": "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
		},
		{
			"movieName": "Star Wars: Episode V - The Empire Strikes Back",
            "dir": "./moviePosters/endgame.jpeg",
            "desc": "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader and a bounty hunter named Boba Fett all over the galaxy.",
		},
		{
			"movieName": "Gladiator",
            "dir": "./moviePosters/endgame.jpeg",
            "desc": "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
		},
		{
			"movieName": "Léon",
            "dir": "./moviePosters/endgame.jpeg",
            "desc": "Mathilda, a 12-year-old girl, is reluctantly taken in by Léon, a professional assassin, after her family is murdered. An unusual relationship forms as she becomes his protégée and learns the assassin's trade.",
		},
		{
			"movieName": "Terminator 2: Judgment Day",
            "dir": "./moviePosters/endgame.jpeg",
            "desc": "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her teenage son, John Connor, from a more advanced and powerful cyborg.",
		},
		{
			"movieName": "Avengers: Endgame ",
            "dir": "./moviePosters/endgame.jpeg",
            "desc": "After the devastating events of Avengers: Sonsuzluk Savaşı (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
		}
        ]
	,
	
    "drama" :
	[
        {
            "movieName": "The Shawshank Redemption",
            "dir": "./moviePosters/ModernTimes.jpeg",
			"desc": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
		},
		{
			"movieName": "The Godfather ",
            "dir": "./moviePosters/endgame.jpeg",
            "desc": "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
		},
		{
			"movieName": "12 Angry Men",
            "dir": "./moviePosters/endgame.jpeg",
            "desc": "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
		},
		{
			"movieName": "Pulp Fiction",
            "dir": "./moviePosters/endgame.jpeg",
            "desc": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
		},
		{
			"movieName": "Schindler's List ",
            "dir": "./moviePosters/endgame.jpeg",
            "desc": "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
		},
		{
			"movieName": "Fight Club",
            "dir": "./moviePosters/endgame.jpeg",
            "desc": "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
		},
		{
			"movieName": "Forrest Gump",
            "dir": "./moviePosters/endgame.jpeg",
            "desc": "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate and other historical events unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
		},
		{
			"movieName": "One Flew Over the Cuckoo's Nest",
            "dir": "./moviePosters/endgame.jpeg",
            "desc": "A criminal pleads insanity and is admitted to a mental institution, where he rebels against the oppressive nurse and rallies up the scared patients.",
		},
		{
			"movieName": "The Green Mile ",
            "dir": "./moviePosters/endgame.jpeg",
            "desc": "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
		},
		{
			"movieName": "It's a Wonderful Life",
            "dir": "./moviePosters/endgame.jpeg",
            "desc": "An angel is sent from Heaven to help a desperately frustrated businessman by showing him what life would have been like if he had never existed.",
		}
        ]
	,
    "horror" :
	[
        {
            "movieName": "The Shining",
            "dir": "./moviePosters/ModernTimes.jpeg",
			"desc": "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
		},
		{
			"movieName": "Alien",
            "dir": "./moviePosters/endgame.jpeg",
            "desc": "After a space merchant vessel receives an unknown transmission as a distress call, one of the crew is attacked by a mysterious life form and they soon realize that its life cycle has merely begun.",
		},
		{
			"movieName": "Ang-ma-reul bo-at-da",
            "dir": "./moviePosters/endgame.jpeg",
            "desc": "A secret agent exacts revenge on a serial killer through a series of captures and releases.",
		},
		{
			"movieName": "Get Out",
            "dir": "./moviePosters/endgame.jpeg",
            "desc": "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
		},
		{
			"movieName": "Saw",
            "dir": "./moviePosters/endgame.jpeg",
            "desc": "Two strangers awaken in a room with no recollection of how they got there, and soon discover they're pawns in a deadly game perpetrated by a notorious serial killer.",
		},
		{
			"movieName": "The Others",
            "dir": "./moviePosters/endgame.jpeg",
            "desc": "A woman who lives in her darkened old family house with her two photosensitive children becomes convinced that the home is haunted.",
		},
		{
			"movieName": "A Quiet Place",
            "dir": "./moviePosters/endgame.jpeg",
            "desc": "In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing.",
		},
		{
			"movieName": "Gokseong",
            "dir": "./moviePosters/endgame.jpeg",
            "desc": "Soon after a stranger arrives in a little village, a mysterious sickness starts spreading. A policeman, drawn into the incident, is forced to solve the mystery in order to save his daughter.",
		},
		{
			"movieName": "The Conjuring ",
            "dir": "./moviePosters/endgame.jpeg",
            "desc": "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
		},
		{
			"movieName": "The Lighthouse",
            "dir": "./moviePosters/endgame.jpeg",
            "desc": "Two lighthouse keepers try to maintain their sanity while living on a remote and mysterious New England island in the 1890s.",
		}
        ]
	,

    "romantic" :
	[
        {
            "movieName": "Titanic ",
            "dir": "./moviePosters/ModernTimes.jpeg",
			"desc": "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
		},
		{
			"movieName": "Beauty and the Beast",
            "dir": "./moviePosters/endgame.jpeg",
            "desc": "A selfish Prince is cursed to become a monster for the rest of his life, unless he learns to fall in love with a beautiful young woman he keeps prisoner.",
		},
		{
			"movieName": "Ghost ",
            "dir": "./moviePosters/endgame.jpeg",
            "desc": "After a young man is murdered, his spirit stays behind to warn his lover of impending danger, with the help of a reluctant psychic.",
		},
		{
			"movieName": "A Star Is Born ",
            "dir": "./moviePosters/endgame.jpeg",
            "desc": "A musician helps a young singer find fame as age and alcoholism send his own career into a downward spiral.",
		},
		{
			"movieName": "Hitch",
            "dir": "./moviePosters/endgame.jpeg",
            "desc": "A smooth-talking man falls for a hardened columnist while helping a shy accountant woo a beautiful heiress.",
		},
		{
			"movieName": "Pretty Woman",
            "dir": "./moviePosters/endgame.jpeg",
            "desc": "A man in a legal but hurtful business needs an escort for some social events, and hires a beautiful prostitute he meets... only to fall in love.",
		},
		{
			"movieName": "Fifty Shades of Grey",
            "dir": "./moviePosters/endgame.jpeg",
            "desc": "Literature student Anastasia Steele's life changes forever when she meets handsome, yet tormented, billionaire Christian Grey.",
		},
		{
			"movieName": "The Proposal",
            "dir": "./moviePosters/endgame.jpeg",
            "desc": "A pushy boss forces her young assistant to marry her in order to keep her visa status in the U.S. and avoid deportation to Canada.",
		},
		{
			"movieName": "Sex and the City",
            "dir": "./moviePosters/endgame.jpeg",
            "desc": "A New York City writer on sex and love is finally getting married to her Mr. Big. But her three best girlfriends must console her after one of them inadvertently leads Mr. Big to jilt her.",
		},
		{
			"movieName": "La La Land",
            "dir": "./moviePosters/endgame.jpeg",
            "desc": "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
		}
        ]
	,

    "animation" :
        [
		{
			"movieName": "Spirited Away",
			"dir": "./moviePosters/endgame.jpeg",
			"desc": "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
		},
		{
			"movieName": "The Lion King",
			"dir": "./moviePosters/endgame.jpeg",
			"desc": "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
		},
		{
			"movieName": "Hotaru no haka",
			"dir": "./moviePosters/endgame.jpeg",
			"desc": "A young boy and his little sister struggle to survive in Japan during World War II.",
		},
		{
			"movieName": "Spider-Man: Into the Spider-Verse",
			"dir": "./moviePosters/endgame.jpeg",
			"desc": "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
		},
		{
			"movieName": "WALL·E",
			"dir": "./moviePosters/endgame.jpeg",
			"desc": "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.",
		},
		{
			"movieName": "Mononoke-hime",
			"dir": "./moviePosters/endgame.jpeg",
			"desc": "On a journey to find the cure for a Tatarigami's curse, Ashitaka finds himself in the middle of a war between the forest gods and Tatara, a mining colony. In this quest he also meets San, the Mononoke Hime.",
		},
		{
			"movieName": "Toy Story",
			"dir": "./moviePosters/endgame.jpeg",
			"desc": "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.",
		},
		{
			"movieName": "Up",
			"dir": "./moviePosters/endgame.jpeg",
			"desc": "78-year-old Carl Fredricksen travels to Paradise Falls in his house equipped with balloons, inadvertently taking a young stowaway.",
		},
		{
			"movieName": "Hauru no ugoku shiro",
			"dir": "./moviePosters/endgame.jpeg",
			"desc": "When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.",
		},
		{
			"movieName": "Finding Nemo",
			"dir": "./moviePosters/endgame.jpeg",
			"desc": "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home.",
		}
        ]
	};




if (temp == p_comedy) {
	const a = Math.floor(Math.random() * 10);
	console.log(data.comedy[a].movieName) ;
	console.log(data.comedy[a].desc) ;
	var myQuery = queryFunction(data.comedy[a].movieName, data.comedy[a].desc)

}
else if (temp == p_action) {
	const a = Math.floor(Math.random() * 10);
	console.log(data.action[a].movieName) ;
	console.log(data.action[a].desc) ;
	var myQuery = queryFunction(data.action[a].movieName, data.action[a].desc)

	

}
else if (temp == p_drama) {
	const a = Math.floor(Math.random() * 10);
	console.log(data.drama[a].movieName) ;
	console.log(data.drama[a].desc) ;
	var myQuery = queryFunction(data.drama[a].movieName, data.drama[a].desc)

}
else if (temp == p_horror) {
	const a = Math.floor(Math.random() * 10);
	console.log(data.horror[a].movieName) ;
	console.log(data.horror[a].desc) ;
	var myQuery = queryFunction(data.horror[a].movieName, data.horror[a].desc)

}
else if (temp == p_romantic) {
	const a = Math.floor(Math.random() * 10);
	console.log(data.romantic[a].movieName) ;
	console.log(data.romantic[a].desc) ;
	var myQuery = queryFunction(data.romantic[a].movieName, data.romantic[a].desc)

}
else if (temp == p_animation) {
	const a = Math.floor(Math.random() * 10);
	console.log(data.animation[a].movieName) ;
	console.log(data.animation[a].desc) ;
	var myQuery = queryFunction(data.animation[a].movieName, data.animation[a].desc)

}

function myFunction() {
	window.location.href="result.html";
}

function modifyText(text){
	for(var i = 0; i < text.length; i++){
		if(text.charAt(i) == ':' || text.charAt(i) == "-" || text.charAt(i) == "." || text.charAt(i) == "·" || text.charAt(i) == " "){
			//console.log("here");
			text = text.replace(text.charAt(i), "");
		}
		if(text.charAt(i) == "é"){
			text = text.replace(text.charAt(i), "e");
		}
	}
	//console.log(text);
	return text;
}


function queryFunction( title, desc){
	var query = '<h2 class="filmHeader">'
	query = query + title;
	query = query + '</h2><div class="imgdiv"><img src="moviePosters/';
	var modifiedTitle = modifyText(title);
	console.log(modifiedTitle);
	query = query + modifiedTitle;
	query = query + ".jpg";
	query = query + '"qalt="" class="filmImg"><p class="duration"><b>Duration: 120 minutes</b> </p><p class="duration"><b>IMDB Rating: 8.1</b> </p></div><p class="filmDescription">'
	//query = query + '</h2><div class="imgdiv"><img src="moviePosters/endgame.jpeg" alt="" class="filmImg"><p class="duration"><b>Duration: 120 minutes</b> </p><p class="duration"><b>IMDB Rating: 8.1</b> </p></div><p class="filmDescription">';
	query = query + desc;
	query = query + '</p>';

	if(window.document.getElementById("bodyID")==null){
		return;
	}

	var bodyID =window.document.getElementById("bodyID");
	bodyID.innerHTML = query;

	//console.log(query);
	
}







