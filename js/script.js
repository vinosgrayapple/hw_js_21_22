var Arifmetika = {
	pow: function (n,x){
	if (!x) return 1;
	if (!n) return 0;
	exp=Math.abs(x);	
	temp = 1;
	for (var i=0; i < exp; i++) {
		temp *= n;
	}
	return x < 0 ? 1/temp : temp;
}
};

module.exports = Arifmetika;