import { ref } from 'vue';

import usePageRequests from './usePageRequests';

export default function useResource(resource) {
    const { makeRequest } = usePageRequests();
    const items = ref([]);
    const item = ref(null);
    const baseURL = `https://jsonplaceholder.typicode.com/${resource}`;

    const fetchItems = async () => items.value = await makeRequest(baseURL);
    const fetchItem = async (id) => item.value = await makeRequest(`${baseURL}/${id}`);

    return {
        items,
        fetchItems,
        item,
        fetchItem
    }
}