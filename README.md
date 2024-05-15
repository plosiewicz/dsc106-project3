# dsc106-project3

For our visualization, we chose an IMDb movie dataset and chose to use the visualization to display quantitative visuals compared with categorical variables through bubble charts. We chose bubble charts because they are suitable for displaying hierarchical data and allow for easy comparison of values between different categories. The specific way we organized this bubble chart is designed to see all of the data and being able to compare it to a specified genre.

1. Bubble Chart for Visual Encoding: We chose a bubble chart to visualize the top 250 internationally grossing movies as it effectively represents multiple dimensions of data – genre, sales, and distributor – in a single view. Bubble size encodes sales figures, while color encodes the distributor, and genre separation is achieved through force-directed layout. There is no specific reasoning for the color palette chosen beyond visual appeal.

2. Interactive Buttons for Genre Filtering: To explore the dataset based on genres, we implemented interactive buttons so you can select a genre of interest, and the bubbles rearrange themselves accordingly, providing an instant visual display on genre-specific trends.

3. Hovering Data: If you hover over a bubble, the data for the three variables is shown. There's also a color key for the distributors.

We opted for this encoding to highlight the commercial success of movies and allow for comparison based on sales performance, genre, and distributors.

Development Process Overview:

The development process took about 40 hours to develop between the three of us. 

1. Data Preprocessing (~12 hours): The data preprocessing was done via Zoom between the three of us including finding our dataset, cleaning up the data, and deciding what we were going to choose for the visualization. The majority of the time was spent on D3.js implementation and research on implementation of bubble charts.

2. Design and Prototyping (~7.5 hours): We iterated through several design prototype, experimenting with different visual encodings and interaction techniques. Once we settled on bubble charts, we tried to decide how we wanted to organize our data and add interaction while making it visually appealing. This was also discussed via Zoom with all three members, involving streaming screens. 

3. Implementation (25 hours): Developing the final application involved implementing the chosen design, including D3.js code for the bubble chart, buttons, tooltip, and legend. We allocated tasks based on preference and intrigue, with Nadine focusing on D3.js implementation (with a lot of help from Paul), Dawson on CSS styling, and all of us separately contributing ideas and code for the actual implementation of styling preferences (e.g. Paul on bubble force-directed layout, Nadine on categorizing and color-encoding, and Dawson on aesthetics).

Challenges arose during the implementation phase, particularly in handling the bubbles and getting them to physically escape the bubble chart, coordinating the design details with the interactive force-directing, and understanding the innerworking of D3.js.

Overall, the project was collaborative between all three members, doing most of the work via Zoom and Discord communication. We wanted to create an aesthetic, satisfying display of how high-grossing movies are similar to one another in a data visualization we've never worked with before.
