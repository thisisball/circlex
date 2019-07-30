function Link(num) {
	this.value = num;
	this.next = null;
}


function CycleLink(options) {
	let start = {}, current = {};
	for(let i=0;i<options.length;i++) {
		let link = new Link(i);

		if(i === 0) {
			start = link;
			start.next = start;
			current = start;
		}else{
			current.next = link;
			link.next = start;
			current = current.next;
		}

	}
	return start
}









