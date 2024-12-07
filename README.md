<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Goal Tracker</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
        }
        .container {
            width: 50%;
            margin: auto;
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        h1 {
            text-align: center;
            color: #333;
        }
        input[type="text"] {
            width: 80%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        button {
            padding: 10px 15px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        button:hover {
            background-color: #45a049;
        }
        .goal-list {
            list-style-type: none;
            padding: 0;
        }
        .goal-item {
            display: flex;
            justify-content: space-between;
            padding: 10px;
            margin: 5px 0;
            background-color: #f9f9f9;
            border-radius: 4px;
        }
        .completed {
            text-decoration: line-through;
            color: gray;
        }
        .delete-btn {
            background-color: #f44336;
            border: none;
            color: white;
            cursor: pointer;
            padding: 5px 10px;
            border-radius: 4px;
        }
        .delete-btn:hover {
            background-color: #d32f2f;
        }
    </style>
</head>
<body>

    <div class="container">
        <h1>Goal Tracker</h1>
        <input type="text" id="goalInput" placeholder="Enter your goal here">
        <button onclick="addGoal()">Add Goal</button>
        
        <ul class="goal-list" id="goalList">
            <!-- Goals will be listed here -->
        </ul>
    </div>

    <script>
        function addGoal() {
            var goalInput = document.getElementById('goalInput');
            var goalText = goalInput.value.trim();

            if (goalText !== "") {
                var goalList = document.getElementById('goalList');
                
                // Create list item
                var li = document.createElement('li');
                li.classList.add('goal-item');
                
                // Create goal text
                var goalTextNode = document.createElement('span');
                goalTextNode.textContent = goalText;
                li.appendChild(goalTextNode);

                // Add "Mark as Completed" button
                var completeBtn = document.createElement('button');
                completeBtn.textContent = "Completed";
                completeBtn.onclick = function() {
                    goalTextNode.classList.toggle('completed');
                };
                li.appendChild(completeBtn);

                // Add "Delete" button
                var deleteBtn = document.createElement('button');
                deleteBtn.textContent = "Delete";
                deleteBtn.classList.add('delete-btn');
                deleteBtn.onclick = function() {
                    li.remove();
                };
                li.appendChild(deleteBtn);

                goalList.appendChild(li);

                // Clear input field after adding goal
                goalInput.value = "";
            } else {
                alert("Please enter a goal!");
            }
        }
    </script>

</body>
</html>
