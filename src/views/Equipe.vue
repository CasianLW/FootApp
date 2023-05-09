<template>
  <menu-component />
  <h2 class="title">Liste matchs</h2>
  <div class="grid">
    <ion-card
      class="custom-card"
      v-for="event in events"
      :key="event.dateEvent"
    >
      <ion-card-content>
        <ion-grid>
          <ion-row>
            <ion-col>
              <ion-label style="margin-bottom: 20px; display: block"
                >{{ event.dateEvent }} {{ event.strTime }}</ion-label
              >
              <ion-label style="margin-bottom: 20px; display: block"
                >League : {{ event.strLeague }}</ion-label
              >
              <p style="margin-bottom: 20px; display: block">
                {{ event.strStatus }}
              </p>
            </ion-col>
            <ion-col style="display: block; justify-content: end">
              <ion-label
                style="font-weight: 500; margin-bottom: 10px; display: block"
                >{{ event.strEvent }}</ion-label
              >
              <img
                style="width: auto; height: fit-content"
                :src="event.strThumb"
              />
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-card-content>
    </ion-card>
  </div>
</template>
<script lang="ts">
import {
  IonCard,
  IonPage,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonLabel,
  IonRow,
} from "@ionic/vue";
import { defineComponent } from "vue";
import MenuComponent from "@/components/MenuComponent.vue";

export default defineComponent({
  data() {
    return {
      id: "",
      teamd: "",
      events: [],
    };
  },
  components: {
    IonCard,
    IonPage,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCol,
    IonGrid,
    IonLabel,
    IonRow,
    MenuComponent,
  },
  methods: {
    getEquipe(): void {
      fetch(
        `https://www.thesportsdb.com/api/v1/json/3/eventslast.php?id=${this.id}`
      )
        .then((response) => response.json())
        .then((json) => {
          console.log(json);

          this.events = json.results;
        });
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    this.getEquipe();
  },
});
</script>
<style scoped>
ion-item {
  --padding-start: 0;
}
.title {
  width: auto;
  text-align: center;
}
.ion-label {
  color: rgb(31, 26, 26);
}
.custom-card {
  --background: #ffffff;
  color: rgb(31, 26, 26);
  margin-bottom: 16px;
  border-radius: 0;
}
</style>
