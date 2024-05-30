
import { Magicion } from "../Classes";
import { Daemon } from "../Classes";

test("Проверка работоспособности Magicion", () => {
    let mag = new Magicion(100,2);
    mag.stoned = true;
    mag.attack = 100;
    expect(mag.attack).toBe(85);
}) 

test("Проверка работоспособности Daemon", () => {
    let demon = new Daemon(100,2);
    demon.stoned = true;
    demon.attack = 100;
    expect(demon.attack).toBe(85);
}) 

test("Обычная атака на расстояние", () => {
    let demon = new Daemon(100,2);
    demon.stoned = false;
    demon.attack = 100;
    expect(demon.attack).toBe(90);
}) 

test("Обычная атака на расстояние MAgician", () => {
    let mag = new Magicion(100,2);
    mag.stoned = false;
    mag.attack = 100;
    expect(mag.attack).toBe(90);
}) 

test("Проверка на окаменение", () => {
    let mag = new Magicion(100,2);
    mag.stoned = false;
    expect(mag.stoned).toBe(false);
}) 