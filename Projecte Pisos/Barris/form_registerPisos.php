<!DOCTYPE html>
<html>
<head>
	<title>Frank Projecte</title>
	<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
	<link rel="stylesheet" type="text/css" href="style.css">

</head>

<body>
	<div class="container pt-5 pb-5">
		<h4>Formulari de registre de pisos</h4>

		<div class="row">
			<div class="col-6">
				<form id="form-user-register">
					<div class="form-row mt-5 mb-4">
						<div class="col-8">
							<label for="">Nom del pis</label>
							<input type="text" class="form-control" id="nom_pis" value="" name="">
						</div>
						<br>
						<div class="col-4">
							<label for="">Preu</label>
							<input type="text" class="form-control" id="preu_pis" value="" name="">
						</div>	
					</div>
					<br>
					<div class="form-row mb-4">
						<div class="col-4">
							<label for="">Via</label>
							<select id ="vies" class="custom-select">
								<option selected>Open this select menu</option>
								<option value="1">Carrer</option>
								<option value="2">Torrent</option>
								<option value="3">Avinguda</option>
							</select>
						</div>
						<br>
						<div class="col-4">
							<label for="">Nom del carrer</label>
							<input type="text" class="form-control" id="nom_via">
						</div>
						<br>
						<div class="col-4">
							<label for="">Número</label>
							<input type="text" class="form-control" id="numero_via">
						</div>
					</div>
					<br>
					<div class="form-row mb-4">
						<div class="col-4">
							<label for="">Pis</label>
							<input type="text" class="form-control" id="pis">
						</div>
						<br>
						<div class="col-4">
							<label for="">Escala</label>
							<input type="text" class="form-control" id="escala">
						</div>
						<br>
						<div class="col-4">
							<label for="">Porta</label>
							<input type="text" class="form-control" id="porta">
						</div>
					</div>
					<br>
					<div class="form-row mb-4">
						<div class="col-4">
							<label for="">CP</label>
							<input type="text" class="form-control" id="cp">
						</div>
						<br>
						<div class="col-4">
							<label for="">Districte</label>
							<select id="districte" class="custom-select">
								<option selected>Districtes</option>
							</select>
						</div>
						<br>
						<div class="col-4">
							<label for="">Barri</label>
							<select id="barri" class="custom-select">
								<option selected>Barri</option>
							</select>
						</div>
					</div>
					<br>
					<div class="form-row mb-4">
						<div class="col-4">
							<label for="">Població</label>
							<select class="custom-select">
								<option selected>Menu</option>
								<option value="1">One</option>
								<option value="2">Two</option>
								<option value="3">Three</option>
							</select>
						</div>
					</div>
					<br>
					<button class="btn btn-primary" type="submit">Registrar</button>

					<button class="btn btn-info">Visualitzar</button>
				</form>
			</div>
			<br>
			<div class="col-6 pt-5">
				<h4 id="nomPis"></h4>
				<p id="dir"></p>
				<p id="preu"></p>
				<p id="text"></p>

			</div>
		</div>
	</div>

	<script src="script.js"></script>

</body>
</html>