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
exports.serviceRecordService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    // return payload
    const bikeId = payload.bikeId;
    yield prisma_1.default.bike.findUniqueOrThrow({
        where: {
            bikeId,
        },
    });
    const result = yield prisma_1.default.serviceRecord.create({
        data: payload,
    });
    return result;
});
const getAllServices = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.serviceRecord.findMany({});
    return result;
});
const getPendingServices = () => __awaiter(void 0, void 0, void 0, function* () {
    const date = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const result = yield prisma_1.default.serviceRecord.findMany({
        where: {
            status: {
                in: ["pending", "in-progress"],
            },
            serviceDate: {
                lte: date,
            },
        },
    });
    return result;
});
const getServiceById = (serviceId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.serviceRecord.findUniqueOrThrow({
        where: {
            serviceId,
        },
    });
    return result;
});
const updateService = (serviceId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.serviceRecord.findUniqueOrThrow({
        where: {
            serviceId,
        },
    });
    if (payload === null || payload === void 0 ? void 0 : payload.completionDate) {
        const result = yield prisma_1.default.serviceRecord.update({
            where: {
                serviceId,
            },
            data: { completionDate: payload.completionDate, status: "done" },
        });
        return result;
    }
    const result = yield prisma_1.default.serviceRecord.update({
        where: {
            serviceId,
        },
        data: { completionDate: new Date().toISOString(), status: "done" },
    });
    return result;
});
exports.serviceRecordService = {
    createService,
    getAllServices,
    getServiceById,
    updateService,
    getPendingServices,
};
