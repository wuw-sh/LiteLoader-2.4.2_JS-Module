import {Block, Entity, Item, Player} from "../../API"
import {Float, Integer} from "../Numbers"
import {blockFace, FloatPos, IntPos} from "../Pos"

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

    onChangeSprinting: [player: Player, sprinting: Boolean]

    onChat: [player: Player, msg: String]

    onCloseContainer: [player: Player, block: Block]

    onConsumeTotem: [player: Player]

    onDestroyBlock: [player: Player, block: Block]

    onDropItem: [player: Player, Item: Item]

    onEat: [player: Player, item: Item]

    onEffectAdded: [player: Player, effectName: String]

    onEffectRemoved: [player: Player, effectName: String]

    onEffectUpdated: [player: Player, effectName: String]

    onExperienceAdded: [player: Player, exp: Integer]

    onInventoryChange: [player: Player, slotNum: Integer, oldItem: Item, newItem: Item]

    onJoin: [player: Player]

    onJump: [player: Player]

    onLeft: [player: Player]

    onOpenContainer: [player: Player, block: Block]

    onOpenContainerScreen: [player: Player]

    onPlaceBlock: [player: Player, block: Block]

    onPlayerCmd: [player: Player, cmd: String]

    onPlayerDie: [player: Player, source: Entity]

    onPreJoin: [player: Player]

    onRespawn: [player: Player]

    onSetArmor: [player: Player, slotNum: Integer, item: Item]

    onSneak: [player: Player, isSneaking: Boolean]

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

    onEntityExplode: [source: Entity, pos: FloatPos, radius: Float, maxResistance: Float, isDestroy: Boolean, isFire: Boolean]

    onMobSpawn: [typeName: String, pos: FloatPos]

    onProjectileHitEntity: [entity: Entity, source: Entity]

    onWitherBossDestroy: [witherBoss: Entity, AAbb: IntPos, aaBB: IntPos]

    onRide: [entity1: Entity, entity2: Entity]

    onStepOnPressurePlate: [entity: Entity, pressurePlate: Block]

    onSpawnProjectile: [shooter: Entity, type: String]

    onProjectileCreated: [shooter: Entity, entity: Entity]

    onNpcCmd: [npc: Entity, pl: Player, cmd: String]

    onChangeArmorStand: [as: Entity, pl: Player, slot: Number]

    onEntityTransformation: [uniqueId: String, entity: Entity]

    /**
     *
     * Block Related Events
     *
     */
    onBlockInteracted: [player: Player, block: Block]

    onBlockChanged: [beforeBlock: Block, afterBlock: Block]

    onBlockExplode: [source: Block, pos: FloatPos, radius: Float, maxResistance: Float, isDestroy: Boolean, isFire: Boolean]

    onRespawnAnchorExplode: [pos: IntPos, player: Player]

    onBlockExploded: [block: Block, source: Entity]

    onFireSpread: [pos: IntPos]

    onCmdBlockExecute: [cmd: String, pos: IntPos, isMinecart: Boolean]

    onContainerChange: [player: Player, container: Block, slotNum: Integer, oldItem: Item, newItem: Item]

    onProjectileHitBlock: [block: Block, source: Entity]

    onRedStoneUpdate: [block: Block, evel: Integer, isActive: Boolean]

    onHopperSearchItem: [pos: FloatPos, isMinecart: Boolean]

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
    onScoreChanged: [player: Player, num: Integer, name: String, disName: String]

    onTick: [() => void]

    onServerStarted: [() => void]

    onConsoleCmd: [cmd: String]

    onConsoleOutput: [cmd: String]

    /**
     *
     * Economic System Events
     *
     */
    beforeMoneyAdd: [xuid: String, money: Integer]

    onMoneyAdd: [xuid: String, money: Integer]

    beforeMoneyReduce: [xuid: String, money: Integer]

    onMoneyReduce: [xuid: String, money: Integer]

    beforeMoneyTrans: [from: String, to: String, money: Integer]

    onMoneyTrans: [from: String, to: String, money: Integer]

    beforeMoneySet: [xuid: String, money: Integer]

    onMoneySet: [xuid: String, money: Integer]
}