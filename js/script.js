const { createApp } = Vue;

createApp({
    data() {
        return {
            newItems: {
                icon: "",
                text: "",
                cancel: "",
                color: ""
            },
            titleIcon: "&#10148;",
            titlePrec: "TASK PRECEDENTI",
            items: [
                {
                    icon: "&#10003;",
                    text: "Quarterly Newsletter",
                    cancel: "Editorial",
                    color: "blu",
                    done: true
                },
            ],
            titleIconOggi: "&#10148;",
            titleOggi: "OGGI",
            itemsOggi: [
                {
                    icon: "&#10003;",
                    text: "Recruiting blog post",
                    cancel: "Editorial",
                    color: "blu",
                    done: true
                },
                {
                    icon: "&#10003;",
                    text: "Mobile app launch",
                    cancel: "Q1 Goals",
                    color: "viola",
                    done: true
                },
                {
                    icon: "✘",
                    text: "Interview John H.",
                    cancel: "Recruiting",
                    color: "verde-acqua",
                    done: false
                },
                {
                    icon: "&#10003;",
                    text: "Summit update to mobile storefronts",
                    cancel: "Mobile",
                    color: "viola",
                    done: true
                },
            ],
            titleIconPross: "&#10148;",
            titlePross: "PROSSIMI GIORNI",
            itemsPross: [
                {
                    icon: "✘",
                    text: "schedule meeting with Alex",
                    done: false
                },
                {
                    icon: "&#10003;",
                    text: "Homepage refresh",
                    cancel: "Website",
                    color: "rosa",
                    done: true
                },
                {
                    icon: "&#10003;",
                    text: "Onboard new Sales team members",
                    cancel: "Sales",
                    color: "verde",
                    done: true
                },
                {
                    icon: "&#10003;",
                    text: "Review editorial calendar",
                    cancel: "Editorial",
                    color: "blu",
                    done: true
                },
            ]
        };
    },
    methods: {
        addItems: function() {
            this.items.push(this.newItems);
        }
    }
}).mount("#app");

