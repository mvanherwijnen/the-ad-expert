import client from '../plugins/contentful'

export const state = () => ({
    adviceItems: []
})

export const mutations = {
    setAdviceItems(state, payload) {
        state.adviceItems = payload
    }
}

export const actions = {
    async getAdviceItems({commit}) {
        const response = await client.getEntries({
            content_type: 'advice'
        });
        if (response.items.length > 0) {
            commit('setAdviceItems', response.items);
        }
    }
}
