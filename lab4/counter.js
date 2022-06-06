const counter = {
    currentCount: 0,
    step: 1,

    set(num) {
        this.currentCount = num;
        return this;
    },
    setStep(num) {
        this.step = num;
        return this;
    },
    inc() {
        this.currentCount += this.step;
        return this;
    },
    dec() {
        this.currentCount -= this.step;
        return this;
    },
    now() {
        console.log(this.currentCount);
    }
}

counter.set(3);
counter.now();
counter.inc();
counter.now();
counter.set(0);
counter.dec();
counter.now();
counter.set(20);
counter.setStep(20);
counter.dec();
counter.now();
counter.inc().inc().inc().dec().now();