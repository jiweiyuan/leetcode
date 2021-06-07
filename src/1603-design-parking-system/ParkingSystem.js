// https://leetcode.com/problems/design-parking-system/

class ParkingSystem {
    constructor(big, medium, small) {
        this.big = big
        this.medium = medium
        this.small = small
    }

    addCar(carType) {
        switch (carType) {
            case 1:
                if (this.big) {
                    this.big--
                    return true
                } else {
                    return false
                }
            case 2:
                if (this.medium) {
                    this.medium--
                    return true
                } else {
                    return false
                }
            case 3:
                if (this.small) {
                    this.small--
                    return true
                } else {
                    return false
                }
        }
    }
}
