<template>
	<nav class="navbar navbar-dark navbar-expand-lg fixed-top shadow-lg bright blur bar-padding">
		<div class="container-fluid">
			<RouterLink to="/" class="navbar-brand" active-class="active">🌌 mchlsbl</RouterLink>
			<span
				class="navbar-toggler navbar-toggler-icon"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#collapse"
			></span>
			<div class="navbar-collapse collapse text-end" id="collapse">
				<ul class="navbar-nav ms-auto">
					<li class="nav-item">
						<RouterLink to="/about" class="nav-link" active-class="active">{{ $t("navbar.about") }}</RouterLink>
					</li>
					<li class="nav-item">
						<RouterLink to="/projects" class="nav-link" active-class="active">{{ $t("navbar.projects") }}</RouterLink>
					</li>
					<li class="nav-item">
						<RouterLink to="/contact" class="nav-link" active-class="active">{{ $t("navbar.contact") }}</RouterLink>
					</li>
					<li class="nav-item">
						<RouterLink to="/tictactoe" class="nav-link" active-class="active">{{ $t("navbar.tictactoe") }}</RouterLink>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<style>
.navbar-toggler,
.navbar-toggler:focus,
.navbar-toggler:active,
.navbar-toggler-icon:focus {
	outline: none;
	border: none;
	box-shadow: none;
}
</style>
