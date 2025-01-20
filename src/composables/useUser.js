import { ref } from 'vue';

export default function useUser() {
    const users = ref([]);
    const user = ref(null);
    const baseURL = 'https://jsonplaceholder.typicode.com/users';

    const fetchAll = async () => {
        const response = await fetch(baseURL);
        users.value = await response.json();
    }

    const fetchUser = async (id) => {
        const response = await fetch(`${baseURL}/${id}`);
        user.value = await response.json();
    }

    return {
        users,
        fetchAll,
        user,
        fetchUser
    }
}