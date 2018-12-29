<template>
    <div>
        <div class="login-form">
            <h2>Connecte-toi !</h2>
            <p>Nom de l'équipe :</p>
            <input placeholder="'HIV' ou 'Henri IV'">
            <br/>
            <p>Mot de Passe:</p>
            <input type="password"/>
            <br/>
            <button>Se connecter</button>
        </div>
        <div class="signin-form">
            <h2>Inscrit ton équipe !</h2>
            <p>Nom de l'équipe :</p>
            <input placeholder="Henri IV">
            <br/>
            <p>Trigramme Associé</p>
            <input placeholder="HIV">
            <br/>
            <p>Prénom du capitaine :</p>
            <input placeholder="John">
            <br>
            <p>Nom du capitaine :</p>
            <input placeholder="Cena"/>
            <br/>
            <p>Email du capitaine :</p>
            <input placeholder="john.cena@ens.fr"/>
            <br>
            <button>S'Inscrire !</button>
        </div>
    </div>
</template>

<script>
    export default {
        el: "#app",
    }
</script>

<style scoped>

</style>
