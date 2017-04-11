window.onload=function(){

};

var quotes = [];
quotes[0] = '#blessup';
quotes[1] = "Always have Faith. Always have Hope";
quotes[2] = "The key is to make it.";
quotes[3] = "Smh (shake my head) ... They get mad when you have joy.";
quotes[4] = "Key to more success is a clean heart and a clean face.";
quotes[5] = "We go hard. In everything we do, we\’re going to accomplish our victory and our goal. If it takes a day, a year, or 20 years, we\’re going to win. I haven\’t taken a loss because everything I\’ve done has been a working process to win.";
quotes[6] = "Baby, you smart! You loyal! You a genius!";
quotes[7] = "Those that weather the storm are the great ones.";
quotes[8] = "They\'ll try to close the door on you... Just open it.";
quotes[9] = "My fans expect me to be great and keep being great.";
quotes[10] = "There will be roadblocks but we will overcome them.";
quotes[11] = "They don\’t want you to jet ski.";
quotes[12] = "Another one. No, another two.";
quotes[13] = "I can deal with everything. I got the answer for anything.";
quotes[14] = "I know that I\’ve been put on this Earth to make people happy, to inspire people, and to uplift people. That\’s a beautiful thing.";
quotes[15] = "The key to more success is coco butter.";
quotes[16] = "Watch your back, but more importantly when you get out the shower, dry your back. It\'s a cold world out there.";
quotes[17] = "Stay positive but stay focused. Sometimes things can distract you and you don\'t want to be distracted on the journey to that mountain top.";
quotes[18] = "The key is to enjoy life, because they don't want you to enjoy life.";
quotes[19] = "If you think of something negative and you keep it in your head, you are going to actually live that. Now, if you think of something great and positive and joyful, you\'re going to actually live that. You\'ve got to be careful what you put in your head. Basically, I\'ll call that: \"Don\'t ever play yourself.\"";
quotes[20] = "The other day the grass was brown, now its green cuz I ain\'t give up. Never surrender.";
quotes[21] = "One of my keys to success is a lot of pillows. I feel like a lot of pillows is important to relax each piece of your body.";
quotes[22] = "Don't fall for the trap. Stay focused. It\'s about staying focused but at the same time God is the greatest, pray it up.";
quotes[23] = "When you stop making excuses and you work hard and go hard you will be very successful.";
quotes[24] = "They\'ll try to close the door on you... Just open it.";
quotes[25] = "Almond milk + cinnamon crunch === major key to success.";
quotes[26] = "God is the greatest. So at the end of the day and beginning of the day, I thank God.";
quotes[27] = "The key is to be honest. Be honest, but don\'t play yourself.";
quotes[28] = "To succeed, you must believe. When you believe, you will succeed.";
quotes[29] = "In life everyone has a choice. The key is: make a right choice.";
quotes[30] = "You do know it cost money to put a t-shirt on your back? You do know it cost money have a house? You do know it cost money to eat? Get money, don\'t let these people fool you.";
quotes[31] = "Bless up. Don\'t play yourself.";
quotes[32] = "They never said winning was easy.";
quotes[33] = "The key to more success is coco butter.";
quotes[34] = "We go hard. In everything we do we're going to accomplish our victory and our goal. If it takes a day, a year, or 20 years, we\'re going to win. I haven\'t taken a loss because everything I\'ve done has been a working process to win. From being a kid on them turntables to becoming where I am is not a loss. It\'s a blessing.";
quotes[35] = "I will lose twenty pounds like... I can lose ten... I have. I can lose ten in a week and a few days.";
quotes[36] = "I don\'t use no cologne, none of that. I just use cocoa butter and that\'s it. Everything I need is natural besides going to the shower and taking soap and shampoo and conditioner.";
quotes[37] = "It's simple: Give thanks and use Dove.";
quotes[38] = "The key to success is to keep your head above the water.";
quotes[39] = "When I wake up, I immediately pray. When I go to sleep, I pray. Honestly, a prayer every second, in every breath. I suggest the whole world to do it. Prayer is amazing.";
quotes[40] = "I don't have time to be going back and forth with nobody. Even now, when I work, I\'m excited to go home to see my son. If I\'m working, I make sure I FaceTime so many times in the day just to see him. Anytime I get frustrated or stressed, I FaceTime my son and immediately I don\'t even know what stress is because I\'m accepting my life. When I see him, I see me.";
quotes[41] = "We have to get money. We have no choice. It cost money to eat.";
quotes[42] = "Now I\'m his dad, I live for [my son]. I have a responsibility. It\'s a big responsibility.";
quotes[43] = "Key to more success is a clean heart and a clean face.";
quotes[44] = "When you win big and you win more, They\’re gonna sue you. Just counter sue them tho, Don\’t back down";
quotes[45] = "I know that I\'ve been put on this Earth to make people happy, to inspire people, and to uplift people. That\'s a beautiful thing.";
quotes[46] = "Its so real out here right now, the only reason why you see anything is cuz I got the flash on.";
quotes[47] = "The minute we think we went hard, go harder. We gotta work.";
quotes[48] = "When you success you have to be very smart and be extra focused and protect your surroundings.";
quotes[49] = "They don\'t want you to wear the Saint Lauren fur, they don\'t want you to break App Store, they don\'t want you to be the biggest boss in the game. So what we go\'n do is we go\'n win more.";

function djKhaled(id) {
  var quantity= document.getElementById('number').value,
      randomKhaleds = 0,
      demKhaleds = "";
      document.getElementById(id).innerHTML = "";

  if (isNaN(quantity)){
 var text ="Input not valid";
 document.getElementById("standard").innerHTML =text;
  }

  for (var i = 0; i < quantity; i++) {
      randomKhaleds = randomNum(quotes.length);
      demKhaleds += quotes[randomKhaleds] + "<br><br>";
      document.getElementById(id).innerHTML = demKhaleds;
      document.getElementById(id).style.fontWeight = "normal";
      document.getElementById(id).style.textAlign = "center";
}
}
document.getElementById('standard').style.display = "none";
function show(target) {
document.getElementById('standard').style.display = "block";
}

// Helper functions
function randomNum (length) {
  return Math.floor(Math.random() * length);
}
