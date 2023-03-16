<template>
	<MegaMenu
		:model="navItems"
		:router="router"
		orientation="horizontal"
		style="margin-bottom: 10px;"
	>
		<template #start>
			<b style="margin: 15px; font-size: 25px;">
				Leinweber
			</b>
		</template>
		<template #end>
			<SelectButton
				:value="language"
				v-model="language"
				:options="languageOptions"
				@change="changeLocale"
			/>
		</template>
	</MegaMenu>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { router } from '../router';

export default defineComponent({
	name: 'MenuNav',

	setup() {	
		const { t, locale } = useI18n({ useScope: 'global' });
		const language = ref('en');
		let lastValidLang = 'en';
		const languageOptions:Object[] = ['en', 'cs'];
		const navItems = ref<Object[]>([]);

		onMounted(() => {
			navItems.value = updateMenuItems();
		});

		const changeLocale = (newLocale:any) => {
			if (newLocale.value) {
				locale.value = newLocale.value;
				lastValidLang = newLocale.value;
			} else {
				locale.value = lastValidLang;
				language.value = lastValidLang;
			}
			navItems.value = updateMenuItems();
		};

		const updateMenuItems = ():Object[] => {
			return [
				{ label: t('home'), icon: 'pi pi-fw pi-home', command: () => {router.push('/')} },
				{ label: t('about'), icon: 'pi pi-fw pi-user', command: () => {router.push('/about')} },
				{ label: t('projects'), icon: 'pi pi-fw pi-folder', command: () => {router.push('/projects')} },
				{ label: t('contact'), icon: 'pi pi-fw pi-send', command: () => {router.push('/contact')} }
			]
		};

		return {
			navItems,
			language,
			languageOptions,
			t,
			router,
			locale,
			changeLocale
		}
	},
});
</script>