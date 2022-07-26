import {Block, Entity, Item, Player} from "../../Documentation"
import {blockFace, Float, FloatPos, Integer, IntPos} from "../index"

export class EventList {

    /**
     *
     * Player Related Events
     *
     **/
    afterPlaceBlock: [player: Player, block: Block]

    onAttackBlock: [player: Player, entity: Block, item: Item]

    onAttackEntity: [player: Player, entity: Entity]

    onBedEnter: [player: Player, pos: IntPos]

    onChangeDim: [player: Player, dimid: Integer]

    onChangeSprinting: [player: Player, sprinting: boolean]

    onChat: [player: Player, msg: string]

    onCloseContainer: [player: Player, block: Block]

    onConsumeTotem: [player: Player]

    onDestroyBlock: [player: Player, block: Block]

    onDropItem: [player: Player, Item: Item]

    onEat: [player: Player, item: Item]

    onEffectAdded: [player: Player, effectName: string]

    onEffectRemoved: [player: Player, effectName: string]

    onEffectUpdated: [player: Player, effectName: string]

    onExperienceAdded: [player: Player, exp: Integer]

    onInventoryChange: [player: Player, slotNum: Integer, oldItem: Item, newItem: Item]

    onJoin: [player: Player]

    onJump: [player: Player]

    onLeft: [player: Player]

    onOpenContainer: [player: Player, block: Block]

    onOpenContainerScreen: [player: Player]

    onPlaceBlock: [player: Player, block: Block]

    onPlayerCmd: [player: Player, cmd: string]

    onPlayerDie: [player: Player, source: Entity]

    onPreJoin: [player: Player]

    onRespawn: [player: Player]

    onSetArmor: [player: Player, slotNum: Integer, item: Item]

    onSneak: [player: Player, isSneaking: boolean]

    onStartDestroyBlock: [player: Player, block: Block]

    onTakeItem: [player: Player, entity: Entity, item: Item]

    onUseItem: [player: Player, item: Item]

    onUseItemOn: [player: Player, item: Item, block: Block, side: blockFace, pos: FloatPos]

    onUseRespawnAnchor: [player: Player, pos: IntPos]

    /**
     *
     * Entity Related Events
     *
     **/
    onMobDie: [mob: Entity, source: Entity, cause: Integer]

    onMobHurt: [mob: Entity, source: Entity, damage: Integer, cause: Integer]

    onEntityExplode: [source: Entity, pos: FloatPos, radius: Float, maxResistance: Float, isDestroy: boolean, isFire: boolean]

    onMobSpawn: [typeName: string, pos: FloatPos]

    onProjectileHitEntity: [entity: Entity, source: Entity]

    onWitherBossDestroy: [witherBoss: Entity, AAbb: IntPos, aaBB: IntPos]

    onRide: [entity1: Entity, entity2: Entity]

    onStepOnPressurePlate: [entity: Entity, pressurePlate: Block]

    onSpawnProjectile: [shooter: Entity, type: string]

    onProjectileCreated: [shooter: Entity, entity: Entity]

    onNpcCmd: [npc: Entity, pl: Player, cmd: string]

    onChangeArmorStand: [as: Entity, pl: Player, slot: number]

    onEntityTransformation: [uniqueId: string, entity: Entity]

    /**
     *
     * Block Related Events
     *
     */
    onBlockInteracted: [player: Player, block: Block]

    onBlockChanged: [beforeBlock: Block, afterBlock: Block]

    onBlockExplode: [source: Block, pos: FloatPos, radius: Float, maxResistance: Float, isDestroy: boolean, isFire: boolean]

    onRespawnAnchorExplode: [pos: IntPos, player: Player]

    onBlockExploded: [block: Block, source: Entity]

    onFireSpread: [pos: IntPos]

    onCmdBlockExecute: [cmd: string, pos: IntPos, isMinecart: boolean]

    onContainerChange: [player: Player, container: Block, slotNum: Integer, oldItem: Item, newItem: Item]

    onProjectileHitBlock: [block: Block, source: Entity]

    onRedStoneUpdate: [block: Block, evel: Integer, isActive: boolean]

    onHopperSearchItem: [pos: FloatPos, isMinecart: boolean]

    onHopperPushOut: [pos: FloatPos]

    onPistonTryPush: [pistonPos: IntPos, block: Block]

    onPistonPush: [pistonPos: IntPos, block: Block]

    onFarmLandDecay: [pos: IntPos, entity: Entity]

    onUseFrameBlock: [player: Player, block: Block]

    onLiquidFlow: [from: Block, to: IntPos]

    /**
     *
     * Other Events
     *
     */
    onScoreChanged: [player: Player, num: Integer, name: string, disName: string]

    onTick: [() => void]

    onServerStarted: [() => void]

    onConsoleCmd: [cmd: string]

    onConsoleOutput: [cmd: string]

    /**
     *
     * Economic System Events
     *
     */
    beforeMoneyAdd: [xuid: string, money: Integer]

    onMoneyAdd: [xuid: string, money: Integer]

    beforeMoneyReduce: [xuid: string, money: Integer]

    onMoneyReduce: [xuid: string, money: Integer]

    beforeMoneyTrans: [from: string, to: string, money: Integer]

    onMoneyTrans: [from: string, to: string, money: Integer]

    beforeMoneySet: [xuid: string, money: Integer]

    onMoneySet: [xuid: string, money: Integer]
}