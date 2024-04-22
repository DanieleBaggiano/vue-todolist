const { createApp } = Vue;

createApp({
    data() {
        return {
            newItems: {
                icon: "",
                text: "",
                cancel: "",
                color: "",
                done: false
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
                    icon: "&#10005;",
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
                    icon: "&#10005;",
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
        toggleDone: function (item) {
            item.done = !item.done;
        },

        addItems: function () {
            if (this.newItems.text.trim() !== "") {
                const newItemCopy = Object.assign({}, this.newItems);
                this.items.push(newItemCopy);
                this.newItems.text = "";
            }
        },        
        
        removeTodo: function(index) {
            this.items.splice(index, 1);
        },
        removeTodo2: function(index) {
            this.itemsOggi.splice(index, 1);
        },removeTodo3: function(index) {
            this.itemsPross.splice(index, 1);
        }
    }
}).mount("#app");

