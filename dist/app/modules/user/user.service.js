"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const prisma_1 = require("../../../../generated/prisma");
const prisma_2 = __importDefault(require("../../../shared/prisma"));
const createCustomer = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = {
        email: payload.email,
        role: prisma_1.UserRole.USER,
    };
    //transaction-1 to create user intoDB
    const result = yield prisma_2.default.$transaction((txClient) => __awaiter(void 0, void 0, void 0, function* () {
        yield txClient.user.create({
            data: userData,
        });
        const createCustomer = yield txClient.customer.create({
            data: {
                name: payload.name,
                email: payload.email,
                phone: payload.phone,
            },
        });
        return createCustomer;
    }));
    return result;
});
exports.userService = {
    createCustomer,
};
