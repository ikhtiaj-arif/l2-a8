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
exports.customerService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const getCustomerFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.customer.findMany({});
    return result;
});
const getCustomerById = (customerId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = prisma_1.default.customer.findUniqueOrThrow({
        where: {
            customerId,
        },
    });
    return result;
});
const updateCustomer = (customerId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.customer.findUniqueOrThrow({
        where: { customerId },
    });
    const result = prisma_1.default.customer.update({
        where: {
            customerId,
        },
        data: payload,
    });
    return result;
});
const deleteCustomer = (customerId) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedCustomer = yield prisma_1.default.customer.findUniqueOrThrow({
        where: { customerId },
    });
    console.log(deletedCustomer);
    //transaction
    const result = yield prisma_1.default.$transaction((txClient) => __awaiter(void 0, void 0, void 0, function* () {
        const deletedCustomer = yield txClient.customer.delete({
            where: {
                customerId,
            },
        });
        yield txClient.user.delete({
            where: {
                email: deletedCustomer.email,
            },
        });
        return deletedCustomer;
    }));
    return result;
});
exports.customerService = {
    getCustomerFromDB,
    getCustomerById,
    updateCustomer,
    deleteCustomer,
};
