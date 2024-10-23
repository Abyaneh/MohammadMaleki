<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get feedback from the form
    $feedback = $_POST['feedback'];

    // Check if feedback has been entered
    if (!empty($feedback)) {
        // File path
        $file = 'feedback.txt';

        // Append feedback to the file
        file_put_contents($file, $feedback . "\n", FILE_APPEND);

        // Display success message
        echo "Survey submitted successfully!";
    } else {
        echo "Please provide feedback before submitting.";
    }
}
?>