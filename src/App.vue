<template>
  <ion-app>
    <ion-split-pane content-id="main-content">
      <ion-menu content-id="main-content" type="overlay">
        <ion-content>
          <ion-list id="inbox-list">
            <ion-list-header>Menu</ion-list-header>
            <h2>Ligue 1</h2>
            <router-link
              to="/ligues/4334/classement"
              router-direction="forward"
            >
              <ion-item>
                <ion-label>Classement</ion-label>
              </ion-item>
            </router-link>

            <router-link
              to="/ligues/French%20Ligue%201/equipes"
              router-direction="forward"
            >
              <ion-item>
                <ion-label>Equipes</ion-label>
              </ion-item>
            </router-link>
            <h2>Ligue 2</h2>

            <router-link
              to="/ligues/4401/classement"
              router-direction="forward"
            >
              <ion-item>
                <ion-label>Classement Ligue 2</ion-label>
              </ion-item>
            </router-link>

            <router-link
              to="/ligues/French%20Ligue%202/equipes"
              router-direction="forward"
            >
              <ion-item>
                <ion-label>Equipes Ligue 2</ion-label>
              </ion-item>
            </router-link>
            <h2>Coupe de France</h2>
            <router-link
              to="/ligues/4504/classement"
              router-direction="forward"
            >
              <ion-item>
                <ion-label>Classement</ion-label>
              </ion-item>
            </router-link>

            <router-link
              to="/ligues/Coupe%20de%20France/equipes"
              router-direction="forward"
            >
              <ion-item>
                <ion-label>Equipes</ion-label>
              </ion-item>
            </router-link>
            <h2>Champion's league</h2>

            <router-link
              to="/ligues/4480/classement"
              router-direction="forward"
            >
              <ion-item>
                <ion-label>Classement</ion-label>
              </ion-item>
            </router-link>

            <router-link
              to="/ligues/Champion's%20League/equipes"
              router-direction="forward"
            >
              <ion-item>
                <ion-label>Equipes </ion-label>
              </ion-item>
            </router-link>
          </ion-list>
        </ion-content>
      </ion-menu>
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </ion-split-pane>
  </ion-app>
</template>

<script setup lang="ts">
import {
  IonApp,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonRouterOutlet,
  IonSplitPane,
} from "@ionic/vue";

import { ComputedRef, Ref, ref, watch } from "vue";
import {
  archiveOutline,
  archiveSharp,
  bookmarkOutline,
  bookmarkSharp,
  heartOutline,
  heartSharp,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
  trashOutline,
  trashSharp,
  warningOutline,
  warningSharp,
} from "ionicons/icons";
import { computed } from "vue";
</script>

<style scoped>
ion-menu ion-content {
  --background: var(--ion-item-background, var(--ion-background-color, #fff));
}

ion-menu.md ion-content {
  --padding-start: 8px;
  --padding-end: 8px;
  --padding-top: 20px;
  --padding-bottom: 20px;
}
h2 {
  margin-left: 12px;
  margin-bottom: 0px;
  color: rgb(42, 42, 197);
}
ion-menu.md ion-list {
  padding: 20px 0;
}

ion-menu.md ion-note {
  margin-bottom: 30px;
}

ion-menu.md ion-list-header,
ion-menu.md ion-note {
  padding-left: 10px;
}

ion-menu.md ion-list#inbox-list {
  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);
}

ion-menu.md ion-list#inbox-list ion-list-header {
  font-size: 22px;
  font-weight: 600;

  min-height: 20px;
}

ion-menu.md ion-list#labels-list ion-list-header {
  font-size: 16px;

  margin-bottom: 18px;

  color: #757575;

  min-height: 26px;
}

ion-menu.md ion-item {
  --padding-start: 10px;
  --padding-end: 10px;
  border-radius: 4px;
}

ion-menu.md ion-item.selected {
  --background: rgba(var(--ion-color-primary-rgb), 0.14);
}

ion-menu.md ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.md ion-item ion-icon {
  color: #616e7e;
}

ion-menu.md ion-item ion-label {
  font-weight: 500;
}

ion-menu.ios ion-content {
  --padding-bottom: 20px;
}

ion-menu.ios ion-list {
  padding: 20px 0 0 0;
}

ion-menu.ios ion-note {
  line-height: 24px;
  margin-bottom: 20px;
}

ion-menu.ios ion-item {
  --padding-start: 16px;
  --padding-end: 16px;
  --min-height: 50px;
}

ion-menu.ios ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.ios ion-item ion-icon {
  font-size: 24px;
  color: #73849a;
}

ion-menu.ios ion-list#labels-list ion-list-header {
  margin-bottom: 8px;
}

ion-menu.ios ion-list-header,
ion-menu.ios ion-note {
  padding-left: 16px;
  padding-right: 16px;
}

ion-menu.ios ion-note {
  margin-bottom: 8px;
}

ion-note {
  display: inline-block;
  font-size: 16px;

  color: var(--ion-color-medium-shade);
}

ion-item.selected {
  --color: var(--ion-color-primary);
}
</style>
