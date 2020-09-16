
$(".js-range-slider").ionRangeSlider({
    skin: "square",
    type: "double",
    min: 0,
    max: 900000,
    from: 1,
    to: 900000,
    prefix: "$",

    // // onStart: function(data){
    // //     let valueMinStart=data.from;
    // //     let valueMaxStart=data.to; 
    // //     $(".js-range-slider").data("min", valueMinStart);
    // //     $(".js-range-slider").data("max", valueMaxStart);
    // // },
    onFinish: function(data){
        let valueMinEnd=data.from;
        let valueMaxEnd=data.to;
        console.log(valueMaxEnd)
        console.log(valueMinEnd)
        // $(".js-range-slider").data("min", data.from);
        // $(".js-range-slider").data("max", data.to);
    },

});




