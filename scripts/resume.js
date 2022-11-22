const name = $("#name");
const work = $("#work");
const edu = $("#edu");
const ext = $("#ext");
const hob = $("#hob");
const ref = $("#ref");

name.on("click", show);
work.on("click", show);
edu.on("click", show);
ext.on("click", show);
hob.on("click", show);
ref.on("click", show);

function show() {
	$(this).css("flex-direction", "column");
	$(this).children("ul, ol").children().children("ul, ol").show();
	$(this).children("ul, ol").show("slow");
	$(this).animate({ height: "40%" }, "slow");
	$(this).off();
	$(this).on("click", hide);
}

function hide() {
	$(this).animate({ height: "19.79%" }, "slow");
	$(this)
		.children("ul, ol")
		.hide("slow", () => {
			$(this).css("flex-direction", "row");
			$(this).children("ul, ol").children().children("ul, ol").hide();
		});
	$(this).off();
	$(this).on("click", show);
}
