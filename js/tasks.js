$(document).ready(() => {
  // Function for displaying tasks
  const loadTasks = () => {
    $.ajax({
      url: './php/get-tasks.php',
      method: 'GET',
      success: (data) => {
        console.log(data);
        $('#task-list').empty();
        // Display the tasks from JSON
        data.forEach((task) => {
          const li = $(
            '<li class="list-group-item" task-id="' +
              task.id +
              '"><span class="task-text">' +
              task.task +
              '</span>' +
              ' <span class="remove-btn"><i class="fa fa-trash"></i></span></li>',
          );
          $('#task-list').append(li);
        });
      },
    });
  };

  // Function for adding task to the list
  const addItem = () => {
    const $addItem = $('input[name=item]').val();
    if ($addItem === '') {
      alert('Cannot add empty tasks!');
    } else {
      $.ajax({
        url: './php/add-task.php',
        type: 'POST',
        data: { task: $addItem },
        success: () => {
          loadTasks();
          $('input[name=item]').val('');
        },
      });
    }
  };
  // Bind the addItem function to the click event of the Add button
  $('.add-btn').click(addItem);

  // Add a task with an enter keypress
  $('input[name=item]').keypress((e) => {
    if (e.keyCode === 13) {
      addItem();
    }
  });

  // Delete task with the remove button
  $('#task-list').on('click', '.remove-btn', (e) => {
    const $item = $(e.currentTarget).closest('li');
    const $taskId = $item.attr('task-id');
    $.ajax({
      url: './php/delete-task.php',
      method: 'POST',
      data: { id: $taskId },
      success: () => {
        $item.fadeOut(500, () => {
          $item.remove();
        });
      },
    });
  });
  // Display task list when page is loaded
  loadTasks();
});
