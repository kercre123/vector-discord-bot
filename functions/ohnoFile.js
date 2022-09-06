module.exports = {
ohnoCommand: function ohnoCommand(message) {
  	const ohno1 = "*cracks lift* aight im outside your door";
 	const ohno2 = "~~fuck~~";
  	const ohno3 = "**bi tch-**";
  	const ohno4 = "*cries*";
  	const ohno5 = "**how?** DDL won't like this...";
  	const ohno6 = "*~~aH SHIT~~*";
  	const ohno7 = "*oH NO-*";
  	const ohno8 = "aAAAAA";
  	const ohno9 = "I don't have fingers, but imagine me giving you the **middle finger**";
  	const ohno10 = "~~im gonna fucking choke you~~";
  	const ohno11 = "a";
  	const ohno12 = "no";
  	const ohno13 = "b ruh";
  	const ohno14 = "Vector Fact: i am 100 meters from your location and approaching rapidly. **start running.**";
  	const ohno = [ohno1, ohno2, ohno3, ohno4, ohno5, ohno6, ohno7, ohno8, ohno9, ohno10, ohno11, ohno12, ohno13, ohno14];
	const ohnomath = Math.floor(Math.random() * ohno.length);
	message.channel.send(ohno[ohnomath]);
	},
};
