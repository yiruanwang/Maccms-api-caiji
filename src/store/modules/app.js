import { otherRouter, appRouter } from '@/router/router';

const app = {
    state: {
        menuList: [],
        routers: [
            otherRouter,
            ...appRouter
        ]
    },
    mutations: {
        updateMenulist(state) {
            console.log("app.js");
            state.menuList = appRouter;
        }
    }
};

export default app;
