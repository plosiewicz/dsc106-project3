(function () {
    var width = 1450,
        height = 750;

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    var svg = d3.select("#chart")
        .append("svg")
        .attr("height", height)
        .attr("width", width)
        .append("g")
        .attr("transform", "translate(0,0)");

    var radiusScale = d3.scaleSqrt().domain([485930816, 2923706026]).range([4, 40]);

    // Define generic forceX function for genre separation
    function createForceX(genre) {
        return d3.forceX(function (d) {
            return d[genre] == 1 ? 300 : 1000;
        }).strength(0.1);  // Adjusted strength for better separation
    }

    var forceXcombine = d3.forceX(width / 2).strength(0.05);
    var forceY = d3.forceY((height / 2) + 100).strength(0.05);
    var forceCollide = d3.forceCollide(d => radiusScale(d.sales) + 2);

    var simulation = d3.forceSimulation()
        .force("x", forceXcombine)
        .force("y", forceY)
        .force("collide", forceCollide);

    // Tooltip
    var tooltip = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);


    function ready(error, datapoints) {
        var colorScale = d3.scaleOrdinal(d3.schemeCategory20)
            .domain(datapoints.map(d => d.Distributor));

        var circles = svg.selectAll(".movie")
            .data(datapoints)
            .enter().append("circle")
            .attr("class", "movie")
            .attr("r", d => radiusScale(d.sales))
            .attr("fill", d => colorScale(d.Distributor))
            .on('mouseover', function (d) {
                // Show tooltip on hover
                tooltip.transition()
                    .duration(200)
                    .style("opacity", .9);
                tooltip.html(d.Title + "<br/>" + "Distributor: " + d.Distributor + "<br/>" + "Sales: $" + numberWithCommas(d.sales))
                    .style("left", (d3.event.pageX) + "px")
                    .style("top", (d3.event.pageY - 28) + "px");
            })
            .on('mouseout', function (d) {
                // Hide tooltip on mouseout
                tooltip.transition()
                    .duration(500)
                    .style("opacity", 0);
            });

        simulation.nodes(datapoints).on('tick', ticked);

        function ticked() {
            circles
                .attr("cx", d => d.x)
                .attr("cy", d => d.y);
        }

        // Add legend
        // Add legend
        // Add legend
        var legend = svg.selectAll(".legend")
            .data(colorScale.domain())
            .enter().append("g")
            .attr("class", "legend")
            .attr("transform", function (d, i) { return "translate(0," + i * 20 + ")"; });

        legend.append("rect")
            .attr("x", width - 18)
            .attr("width", 18)
            .attr("height", 18)
            .style("fill", colorScale);

        legend.append("text")
            .attr("x", width - 24)
            .attr("y", 9)
            .attr("dy", ".35em")
            .style("text-anchor", "end")
            .text(function (d) { return d; });

        // Add background for legend text
        legend.each(function (d, i) {
            var bbox = this.getBBox();
            d3.select(this).insert("rect", "text")
                .attr("x", bbox.x - 2)
                .attr("y", bbox.y - 2)
                .attr("width", bbox.width + 4)
                .attr("height", bbox.height + 4)
                .style("fill", colorScale(d))
                .style("opacity", 0.9);
        });


        // Event listeners for buttons
        function addButtonListener(buttonId, forceX) {
            d3.select(buttonId).on('click', function () {
                d3.selectAll('.button').classed('selected-button', false);
                // Add the class to the clicked button
                d3.select(this).classed('selected-button', true);
                simulation
                    .force("x", forceX)
                    .alpha(0.5) // Reset alpha to restart the simulation
                    .restart();
            });
        }

        addButtonListener("#adventure", createForceX("Adventure"));
        addButtonListener("#action", createForceX("Action"));
        addButtonListener("#musical", createForceX("Musical"));
        addButtonListener("#western", createForceX("Western"));
        addButtonListener("#mystery", createForceX("Mystery"));
        addButtonListener("#thriller", createForceX("Thriller"));
        addButtonListener("#romance", createForceX("Romance"));
        addButtonListener("#scifi", createForceX("SciFi"));
        addButtonListener("#drama", createForceX("Drama"));
        addButtonListener("#family", createForceX("Family"));
        addButtonListener("#history", createForceX("History"));
        addButtonListener("#fantasy", createForceX("Fantasy"));
        addButtonListener("#biography", createForceX("Biography"));
        addButtonListener("#crime", createForceX("Crime"));
        addButtonListener("#comedy", createForceX("Comedy"));
        addButtonListener("#horror", createForceX("Horror"));
        addButtonListener("#music", createForceX("Music"));
        addButtonListener("#animation", createForceX("Animation"));
        addButtonListener("#combined", forceXcombine);

        simulation.nodes(datapoints).on('tick', ticked);
    }

    d3.queue()
        .defer(d3.csv, "imdb2.csv")
        .await(ready);
})();
