<template>
  <menu-component></menu-component>

  <ion-card style="padding: 0 20px; background: transparent">
    <h1>Bienvenue,</h1>
    <p style="font-size: 12px">
      Notre application de football vous permet de suivre les classements, les
      équipes et les matchs en temps réel.
    </p>
  </ion-card>
  <ion-card class="custom-card" v-for="(league, index) in leagues" :key="index">
    <ion-grid>
      <ion-row>
        <ion-col>
          <ion-card-title class="custom-card-title">{{
            league.title
          }}</ion-card-title>
          <router-link :to="league.classmentLink" class="custom-link"
            ><ion-icon name="arrow-forward-outline"></ion-icon> Voir le
            classement</router-link
          >
          <router-link :to="league.teamsLink" class="custom-link"
            ><ion-icon name="arrow-forward-outline"></ion-icon> Voir les
            équipes</router-link
          >
        </ion-col>
        <ion-col>
          <ion-card-content class="custom-card-content">
            <img :src="league.image" alt="League logo" />
          </ion-card-content>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-card>
</template>

<script>
import MenuComponent from "@/components/MenuComponent.vue";
import {
  IonCard,
  IonCardTitle,
  IonCardContent,
  IonCardHeader,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
} from "@ionic/vue";
import { defineComponent } from "vue";

const leagues = [
  {
    title: "Ligue 1",
    classmentLink: "/ligues/4334/classement",
    teamsLink: "/ligues/French Ligue 1/equipes",
    image: "/ligue1.png",
  },
  {
    title: "Ligue 2",
    classmentLink: "/ligues/4401/classement",
    teamsLink: "/ligues/French Ligue 2/equipes",
    image: "/ligue2.png",
  },
  {
    title: "Coupe de France",
    classmentLink: "/ligues/4504/classement",
    teamsLink: "/ligues/Coupe de France/equipes",
    image: "/coupedefrance.png",
  },
  {
    title: "Champion's League",
    classmentLink: "/ligues/4480/classement",
    teamsLink: "/ligues/Champion's League/equipes",
    image: "/championsleague.jpg",
  },
];

const CustomCard = defineComponent({
  name: "CustomCard",
  components: {
    IonCard,
    IonCardTitle,
    IonCardContent,
    IonCardHeader,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    MenuComponent,
  },
  setup() {
    return { leagues };
  },
});

export default CustomCard;
</script>

<style scoped>
.custom-card {
  --background: #ffffff;
  color: rgb(31, 26, 26);
  margin-bottom: 16px;
  border-radius: 0;
}

.custom-card-title {
  font-size: 20px;
  font-weight: bold;
  color: rgb(31, 26, 26);
}

.custom-link::before {
  content: "⚽";
  text-decoration: none;
}
.custom-link {
  margin-bottom: 10px;
  display: block;
  color: rgb(31, 26, 26);
}

.custom-card-content {
  display: flex;
  justify-content: end;
}

.custom-card-content img {
  width: 70px;
}
</style>
