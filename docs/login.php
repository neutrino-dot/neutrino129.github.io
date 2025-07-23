if ($_POST['username'] == 'admin' && $_POST['password'] == 'secret') {
  $_SESSION['user'] = 'admin';
  header('Location: dashboard.php');
  exit;
ph} else {
  header('Location: login.php?error=1');
  exit;
}
