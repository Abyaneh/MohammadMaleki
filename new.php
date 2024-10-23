<?php
// Path to the feedback file
$file = 'feedback.txt';

if (file_exists($file) && filesize($file) > 0) {
    // Read messages from the file
    $feedbacks = file($file);
    foreach ($feedbacks as $feedback) {
        echo "<p>$feedback</p>";
    }
} else {
    echo "<p>No feedback available yet.</p>"; // Message if the file is empty
}
?>
