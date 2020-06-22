import { ActionContext } from 'vuex';
import request from '../../helper/request';
// import Chat from '../../socket/chat';
import { MessageRecord } from '../../interface/chat';

interface State {
  messages: {
    friend_id: number;
    list: MessageRecord[];
  }[];
}

const state: State = {
  messages: [],
};

const mutations = {
  SET_USER_MESSAGES(state: State, { messages: list }: { messages: MessageRecord[] }) {
    const messages = [...state.messages];
    list.forEach(item => {
      const { dist_id, user_id, is_owner } = item;
      const friend_id = is_owner ? dist_id : user_id;
      const msg = messages.find(c => c.friend_id === friend_id);
      if (!msg) {
        messages.push({
          friend_id,
          list: [item],
        });
      } else {
        msg.list.push(item);
      }
    });
    state.messages = messages;
  },
};

const actions = {
  async getUnreadMessage({ commit }: ActionContext<State, any>) {
    const [err, res] = await request({
      url: '/user/unread-message',
      method: 'get',
    });
    if (res && res.errno === 200) {
      commit('SET_USER_MESSAGES', { messages: res.data });
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
