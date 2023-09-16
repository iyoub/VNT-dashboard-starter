<template>
  <div class="text-center">
    <h1 className="text-3xl font-semibold mb-4">About {{ getAppInfo.name }}</h1>
    <p class="text-gray-800 text-lg max-w-2xl mx-auto mb-8">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia dicta cum consectetur molestiae saepe dolores ut ea doloribus a
      assumenda maxime repellendus unde asperiores rerum tempora provident velit exercitationem sed natus modi, dolor facilis? Nam eos
      doloribus, sapiente veniam est eum optio consectetur veritatis. Suscipit, id architecto provident nihil unde reiciendis beatae ducimus
      qui dolorum? Ab maiores adipisci dolores dolorem sit ut repellendus at libero atque voluptatum expedita rem numquam quae itaque sunt
      neque dignissimos iusto quas, quis autem! Nobis commodi, fuga aperiam reprehenderit odit iure neque? Iure, veritatis quas ex odio
      omnis repudiandae cum expedita facere! Magnam, earum doloremque?
    </p>
  </div>
</template>

<script setup>
import { useAppConfig } from '@/stores/app-config'
import { storeToRefs } from 'pinia'

const appConfig = useAppConfig()
const { getAppInfo } = storeToRefs(appConfig)
</script>
