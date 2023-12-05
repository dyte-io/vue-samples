<script>
import DyteClient from "@dytesdk/web-core";
import { ref } from "vue";

const meeting = ref(null);

function mount() {
  const searchParams = new URLSearchParams(window.location.search);

  const authToken = searchParams.get("authToken");

  if (!authToken) {
    alert(
    "An authToken wasn't passed, please pass an authToken in the URL query to join a meeting."
    );
    return;
  }

  DyteClient.init({
    authToken,
  }).then(async (m) => {
    await m.join();
    meeting.value = m;
  });
};

export default {
  name: "Meeting",
  setup() {
    mount();
    return {
      meeting,
    }
  }
};
</script>

<template>
  <div class="flex flex-col bg-zinc-100 w-full h-screen">
      <div class="h-12 w-full flex justify-between">
        <dyte-livestream-indicator v-bind="{ meeting }" />
        <dyte-viewer-count v-bind="{ meeting }" />
      </div>
      <div class="flex flex-1 w-full">
        <div class="h-full w-full p-4 pl-0">
          <dyte-livestream-player v-if="meeting" v-bind="{ meeting }" />
          
        </div>
        <div class="h-full w-[480px] flex flex-col">
          <div class="flex flex-row gap-1">
            <div class="tab-btn">Public Chat</div>
            <div class="tab-btn">Private Chat</div>
            <div class="tab-btn">Followers</div>
          </div>
          <dyte-chat v-bind="{ meeting }" class="bg-zinc-200 rounded-lg overflow-hidden" />
        </div>
      </div>
      <div class="h-12 w-full"></div>
  </div>
</template>
