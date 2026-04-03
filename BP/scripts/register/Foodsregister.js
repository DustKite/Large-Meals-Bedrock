var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ItemStopUseAfterEvent, world } from "@minecraft/server";
import { EventAPI } from "../lib/EventAPI";

export class Foodsregister {
    eat(args) {
        const itemStack = args.itemStack;
        const player = args.source;
        const useDuration = args.useDuration;
        if (itemStack && useDuration == 0) {
            switch (itemStack.typeId) {
                case "large_meals:pufferfish_broth":
                    player.addEffect('saturation', 60 * 20, { amplifier: 0 });
                    break;
                case "large_meals:potato_soup":
                case "large_meals:red_soup":
                case "large_meals:tomato_egg_soup":
                    player.addEffect('saturation', 180 * 20, { amplifier: 0 });
                    break;
                case "large_meals:cod_deluxe":
                case "large_meals:chicken_curry":
                case "large_meals:pasta_with_mushroom_sauce":
                    player.addEffect('saturation', 180 * 20, { amplifier: 0 });
                    break;
                case "large_meals:hearty_lunch":
                    player.addEffect('regeneration', 5 * 20, { amplifier: 0 });
                    player.addEffect('saturation', 180 * 20, { amplifier: 0 });
                    break;
                case "large_meals:omurice":
                case "large_meals:roasted_mutton_rack":
                case "large_meals:mushroom_pot_pie":
                    player.addEffect('saturation', 300 * 20, { amplifier: 0 });
                    break;
                case "large_meals:sweet_berry_custard":
                case "large_meals:rice_pudding":
                    player.addEffect('regeneration', 5 * 20, { amplifier: 0 });
                    break;
            }
        }
    }
}
__decorate([
    EventAPI.register(world.afterEvents.itemStopUse),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ItemStopUseAfterEvent]),
    __metadata("design:returntype", void 0)
], Foodsregister.prototype, "eat", null);