<script>
import Header from '../Header.svelte';
import Footer from '../Footer.svelte';
</script>
<main>
<Header />
<form action="/submit-path" method="POST">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" placeholder="Enter username" required>

  <label for="user-email">Email Address:</label>
  <input type="email" id="user-email" name="email" required>

  <button type="submit">Register</button>
</form>
<Footer />
</main>

<style>
main {
background-color: black;
}
</style>
