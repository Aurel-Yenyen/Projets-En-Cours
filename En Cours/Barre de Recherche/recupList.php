<?php
$conn = new mysqli('localhost', 'root', '', 'phppot_examples');
if (! empty($_POST["keyword"])) {
    $sql = $conn->prepare("SELECT * FROM search_box WHERE search LIKE  ? ORDER BY mots LIMIT 0,6");
    $search = "{$_POST['keyword']}%";
    $sql->bind_param("s", $search);
    $sql->execute();
    $result = $sql->get_result();
    if (! empty($result)) {
        ?>
<ul id="country-list">
<?php
        foreach ($result as $country) {
            ?>
   <li
        onClick="selectCountry('<?php echo $country["mots"]; ?>');">
      <?php echo $country["mots"]; ?>
    </li>
<?php
        } // end for
        ?>
</ul>
<?php
    } // end if not empty
}
?>