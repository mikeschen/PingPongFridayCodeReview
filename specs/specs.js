describe('pingPong', function() {
	it("returns 1 when 1 is the input", function() {
		expect(pingPong(1)).to.eql([1]);
	});

	it("returns 'ping' when 3 is the input", function() {
		expect(pingPong(3)).to.eql([1, 2,"ping"]);
	});

	it("returns 'pong' when 5 is the input", function() {
		expect(pingPong(5)).to.eql([1,2,"ping",4,"pong"]);
	});

	it("returns 2 pongs and 3 pings when 10 is the input", function() {
		expect(pingPong(10)).to.eql([1,2,"ping",4,"pong","ping",7,8,"ping","pong"]);
	});

	it("returns 2 pongs and 4 pings and a pingpong when 15 is the input", function() {
		expect(pingPong(15)).to.eql([1,2,"ping",4,"pong","ping",7,8,"ping","pong", 11, "ping", 13, 14, "pingpong"]);
	});

	it("returns 'Please Enter a Valid Number' when a string is the input", function() {
		expect(pingPong("blahblah")).to.eql(["Please Enter a Valid Number"]);
	});

		it("returns error message -1 is the input", function() {
		expect(pingPong(-1)).to.eql(["Please Enter a Number Greater Than 0"]);
	});
	

});
