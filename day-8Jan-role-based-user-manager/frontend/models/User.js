export class User {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }

    getAccess() {
        switch (this.role) {
            case "admin":
                return "Full access";
            case "user":
                return "Limited access";
            default:
                return "No access"
        }
    }
}